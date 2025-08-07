"use client";

import { useState } from "react";

type NoteEntry = {
  date: string;
  tags: string[];
  entry: string[];
};

export default function JsonFormatter() {
  const [rawInput, setRawInput] = useState("");
  const [jsonOutput, setJsonOutput] = useState<NoteEntry[]>([]);

  const formatDate = (dateStr: string) =>
    `${dateStr.slice(0, 4)}-${dateStr.slice(4, 6)}-${dateStr.slice(6)}`;

  const convertToJSON = () => {
    const lines = rawInput.trim().split("\n");
    const results: NoteEntry[] = [];

    let currentDate = "";
    let currentEntries: string[] = [];
    let currentTags: Set<string> = new Set();

    const pushCurrentNote = () => {
      if (currentDate && currentEntries.length) {
        results.push({
          date: formatDate(currentDate),
          tags: Array.from(currentTags),
          entry: currentEntries,
        });
      }
    };

    for (const line of lines) {
      const trimmed = line.trim();

      if (/^\d{8}$/.test(trimmed)) {
        pushCurrentNote();
        currentDate = trimmed;
        currentEntries = [];
        currentTags = new Set();
      } else if (trimmed) {
        const [tagPart, ...rest] = trimmed.split(":");
        const tagCandidates = tagPart
          .split(/,|vs|&| and /i)
          .map((t) => t.trim());
        tagCandidates.forEach((tag) => {
          if (tag) currentTags.add(tag);
        });

        const entryText = rest.join(":").trim();
        if (entryText) currentEntries.push(entryText);
      }
    }

    pushCurrentNote();
    setJsonOutput(results);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(jsonOutput, null, 2));
    alert("Copied to clipboard!");
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Note Converter</h1>
      <p>Paste your raw notes below and click "Convert to JSON".</p>

      <textarea
        value={rawInput}
        onChange={(e) => setRawInput(e.target.value)}
        rows={20}
        style={{ width: "100%", marginBottom: "1rem", fontFamily: "monospace" }}
        placeholder="Paste your raw notes here..."
      />

      <div style={{ marginBottom: "1rem" }}>
        <button onClick={convertToJSON}>Convert to JSON</button>
        {jsonOutput.length > 0 && (
          <button onClick={handleCopy} style={{ marginLeft: "1rem" }}>
            Copy JSON
          </button>
        )}
      </div>

      {jsonOutput.length > 0 && (
        <pre
          style={{
            background: "#f4f4f4",
            padding: "1rem",
            borderRadius: "8px",
            overflowX: "auto",
          }}
        >
          {JSON.stringify(jsonOutput, null, 2)}
        </pre>
      )}
    </div>
  );
}
