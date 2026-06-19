from nlp_processor import initialize_nlp_engine

class SkillSegmentationPipeline:
    """
    Day 9 Automated Segmenter: Converts raw text strings into cleanly categorized 
    feature arrays (Languages, Frameworks, Infrastructure Configuration properties).
    """
    def __init__(self):
        # Initialize your custom rule-bound engine
        self.nlp = initialize_nlp_engine()
        
    def execute_segmentation(self, raw_text: str) -> dict:
        if not raw_text.strip():
            return {"languages": [], "frameworks": [], "infrastructure": []}
            
        doc = self.nlp(raw_text)
        
        # Use sets to drop duplicates instantly
        discovered_languages = set()
        discovered_frameworks = set()
        discovered_infra = set()
        
        for entity in doc.ents:
            label = entity.label_
            clean_word = entity.text.strip()
            
            if label == "LANG":
                discovered_languages.add(clean_word)
            elif label == "FRAMEWORK":
                discovered_frameworks.add(clean_word)
            elif label == "INFRA":
                discovered_infra.add(clean_word)
                
        # Cast back to lists for simple database serialization
        return {
            "languages": list(discovered_languages),
            "frameworks": list(discovered_frameworks),
            "infrastructure": list(discovered_infra)
        }

if __name__ == "__main__":
    segmenter = SkillSegmentationPipeline()
    
    # Mocking an inbound candidate stream payload
    mock_resume = """
    EXPERIENCE: Developed relational databases using PostgreSQL inside isolated Docker containers. 
    Wrote backend analytics applications utilizing Python, SQLAlchemy core, and Scikit-Learn libraries.
    """
    
    results = segmenter.execute_segmentation(mock_resume)
    print("\n--- Day 9 Automated Segmentation Results ---")
    print(results)