import os
from crewai import Agent, Task, Crew, Process

def run_agentic_validation_suite():
    print("🤖 Constructing Autonomous Multi-Agent Ingestion Framework...")

    # 1. Instantiate our specialized Agent nodes
    policy_verifier = Agent(
        role="Senior Claims Policy Verifier",
        goal="Analyze inbound insurance claim parameters and cross-reference them against policy clauses.",
        backstory=(
            "You are an elite automated risk examiner. Your primary operational function is to scan "
            "unstructured claim payloads and confirm whether the reported incident matches the strict "
            "coverage guidelines and financial limits of the policy."
        ),
        verbose=True,
        allow_delegation=False
    )

    fraud_investigator = Agent(
        role="Financial Fraud Investigator",
        goal="Audit claim payload historical data grids to identify anomalous or suspicious behavior metrics.",
        backstory=(
            "You are a computational forensic data scientist specializing in insurance claim protection. "
            "Your objective is to inspect transactional parameters for double-dipping exploits, unnatural "
            "timestamp frequencies, or values exceeding statistical norms."
        ),
        verbose=True,
        allow_delegation=False
    )

    # 2. Define Day 20 Core Tasks tied directly to our active nodes
    task_policy_check = Task(
        description=(
            "Review incoming claim hash parameters and confirm if the reported atmospheric damage "
            "clause lines up with standard policy thresholds. Cross-verify that the total requested "
            "amount does not breach the coverage roof constraint of $50,000."
        ),
        expected_output="A structured validation brief marking policy alignment status as COMPLIANT or NON-COMPLIANT.",
        agent=policy_verifier
    )

    task_fraud_audit = Task(
        description=(
            "Scan structural transaction entries for duplicate claim attempts. Check if identical claim IDs "
            "or policy numbers have submitted overlapping compensation entries within the same calendar quarter."
        ),
        expected_output="An anomaly evaluation profile highlighting pattern flags, repetition counters, and risk ratings.",
        agent=fraud_investigator
    )

    print("✅ System Tasks Formed. Assembling operational Crew engine...")

    # 3. Consolidate your workers and tasks into a synchronous sequential pipeline
    claims_validation_crew = Crew(
        agents=[policy_verifier, fraud_investigator],
        tasks=[task_policy_check, task_fraud_audit],
        process=Process.sequential,
        verbose=True
    )

    print("\n─── Multi-Agent Execution Pipeline Topology ───")
    print(f"💼 Total Staffed Personnel Nodes: {len(claims_validation_crew.agents)}")
    print(f"📋 Total Bound Operational Tasks: {len(claims_validation_crew.tasks)}")
    print("───────────────────────────────────────────────")
    print("🏁 Day 20 Infrastructure Checkpoint Reached: Workflow initialized successfully!\n")

if __name__ == "__main__":
    run_agentic_validation_suite()