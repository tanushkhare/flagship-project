import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer

def generate_tfidf_matrix(documents: list[str]):
    """
    Day 10 & 11 Core Engine: Compiles incoming text datasets into structured,
    normalized TF-IDF dense matrices using numerical evaluation scopes.
    """
    print("🧠 Ingesting raw document strings into TF-IDF vector models...")
    # Instantiate our matrix vectorizer, scrubbing out generic structural fillers ("the", "is", "with")
    vectorizer = TfidfVectorizer(stop_words='english')
    
    # Fit the text parameters and extract statistical weighting calculations
    tfidf_matrix = vectorizer.fit_transform(documents)
    
    # Transform sparse structural layouts into readable, standard dense NumPy arrays
    dense_matrix = tfidf_matrix.toarray()
    
    print("\n─── TF-IDF Mathematical Matrix Structural Trace ───")
    print(f"Matrix Dimension Coordinates: {dense_matrix.shape} ──> [Rows (Profiles) x Columns (Unique Terms)]")
    print(f"Registered Analytical Token Keys: {list(vectorizer.get_feature_names_out())}\n")
    
    return dense_matrix, vectorizer

def calculate_cosine_similarity(vector_a: np.ndarray, vector_b: np.ndarray) -> float:
    """
    Day 12 Vector Core: Hand-codes raw geometric similarity scoring metrics
    using optimized NumPy dot product arrays.
    """
    # 1. Compute the linear scalar dot product multiplication of the two matrices
    dot_product = np.dot(vector_a, vector_b)
    
    # 2. Calculate the L2 Norm (Euclidean Magnitude) of Vector A: sqrt(sum(A_i^2))
    norm_a = np.linalg.norm(vector_a)
    
    # 3. Calculate the L2 Norm (Euclidean Magnitude) of Vector B: sqrt(sum(B_i^2))
    norm_b = np.linalg.norm(vector_b)
    
    # Edge case protection: Prevent division-by-zero operations if an array is completely blank
    if norm_a == 0 or norm_b == 0:
        return 0.0
        
    # 4. Final step: Divide the dot product by the multiplied vector lengths
    similarity_score = dot_product / (norm_a * norm_b)
    return float(similarity_score)

if __name__ == "__main__":
    # Test dataset matching a standardized job requirement and a parsed candidate profile
    mock_corpus = [
        "Expert Python Backend Developer building APIs using FastAPI and PostgreSQL.",
        "Developer with strong experience in Python and PostgreSQL databases."
    ]
    
    # Execute the text structural tokenization matrix code
    matrix, model_vectorizer = generate_tfidf_matrix(mock_corpus)
    
    # Extract row matrices cleanly for our mathematical dot functions
    job_description_vector = matrix[0]
    candidate_profile_vector = matrix[1]
    
    print("🚀 Triggering Day 12 Geometric Alignment Validation...")
    match_index = calculate_cosine_similarity(job_description_vector, candidate_profile_vector)
    
    print("\n─── Final Match Evaluation Diagnostic Report ───")
    print(f"🎯 Calculated Vector Cosine Alignment Score: {match_index:.4f}")
    print(f"📊 Match Percentage Profile Fit: {match_index * 100:.2f}%\n")