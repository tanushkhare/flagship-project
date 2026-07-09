import React, { useState, useEffect } from 'react';
import './RealtimeWorkspace.css';

const RealtimeWorkspace = ({ workspaceData, setWorkspaceData }) => {
    const [notes, setNotes] = useState("");
    const [summary, setSummary] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (workspaceData) setSummary(workspaceData.result);
    }, [workspaceData]);

    const handleSummarize = async () => {
        if (!notes.trim()) return;
        setLoading(true);
        try {
            const response = await fetch("http://localhost:8000/api/workspace/summarize", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: notes }),
            });
            const data = await response.json();
            
            const payload = { result: data.result, score: 85, nodes: 12, latency: "14ms" };
            setSummary(payload.result);
            if (setWorkspaceData) setWorkspaceData(payload);
        } catch (error) {
            setSummary("Failed to generate summary.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="workspace-container">
            <div className="metrics-grid">
                <div className="metric-card"><p>LATENCY</p><h4>14ms</h4></div>
                <div className="metric-card"><p>STATUS</p><h4 style={{ color: '#22c55e' }}>● Operational</h4></div>
                <div className="metric-card"><p>MEMORY</p><h4>68 MB</h4></div>
            </div>
            <textarea className="workspace-textarea" placeholder="Paste meeting notes..." value={notes} onChange={(e) => setNotes(e.target.value)} rows="6" />
            <button className="workspace-button" onClick={handleSummarize}>{loading ? 'Processing...' : 'Run Analysis'}</button>
            {summary && <div className="summary-box"><h3>AI Insights</h3><p>{summary}</p></div>}
        </div>
    );
};
export default RealtimeWorkspace;