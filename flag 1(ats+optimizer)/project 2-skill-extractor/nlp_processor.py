import spacy
from spacy.pipeline import EntityRuler

def initialize_nlp_engine():
    """
    Day 8 Core Configuration: Instantiates the pre-trained English pipeline 
    and inserts an explicit EntityRuler to control engineering token lookups.
    """
    print("Loading underlying English language models...")
    nlp = spacy.load("en_core_web_sm")
    
    # Add an EntityRuler rule controller right before the base statistical NER
    # This ensures our explicit rule matching takes priority
    ruler = nlp.add_pipe("entity_ruler", before="ner")
    
    # Explicitly map exact token rules to prevent misclassification of terms
    custom_patterns = [
        # Programming Languages
        {"label": "LANG", "pattern": [{"LOWER": "python"}]},
        {"label": "LANG", "pattern": [{"LOWER": "golang"}]},
        {"label": "LANG", "pattern": [{"LOWER": "typescript"}]},
        {"label": "LANG", "pattern": [{"LOWER": "sql"}]},
        
        # Engineering Frameworks
        {"label": "FRAMEWORK", "pattern": [{"LOWER": "fastapi"}]},
        {"label": "FRAMEWORK", "pattern": [{"LOWER": "pytorch"}]},
        {"label": "FRAMEWORK", "pattern": [{"LOWER": "sqlalchemy"}]},
        {"label": "FRAMEWORK", "pattern": [{"LOWER": "scikit"}, {"IS_PUNCT": True, "OP": "?"}, {"LOWER": "learn"}]},
        
        # System Environments / Infrastructure
        {"label": "INFRA", "pattern": [{"LOWER": "docker"}]},
        {"label": "INFRA", "pattern": [{"LOWER": "postgresql"}]},
        {"label": "INFRA", "pattern": [{"LOWER": "kubernetes"}]},
        {"label": "INFRA", "pattern": [{"LOWER": "redis"}]}
    ]
    
    ruler.add_patterns(custom_patterns)
    print("Custom token pattern regulations injected into pipeline successfully.")
    return nlp

if __name__ == "__main__":
    # Quick structural check execution
    engine = initialize_nlp_engine()
    sample_string = "Candidate is an expert in Python building scalable backend services with FastAPI."
    processed_doc = engine(sample_string)
    
    print("\n--- Diagnostic Pipeline Token Match Trace ---")
    for entity in processed_doc.ents:
        print(f"Detected Word: '{entity.text}' ──> Target Tag: [{entity.label_}]")