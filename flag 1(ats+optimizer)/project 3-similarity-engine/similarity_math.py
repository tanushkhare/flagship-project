import numpy as np
from vector_matrix import generate_tfidf_matrix

def calculate_pure_cosine_similarity(vec_a: np.ndarray, vec_b: np.ndarray) -> float:
    """
    Day 12 Structural Core: Programs the manual dot-product and norm 
    vector equations completely by hand using fundamental NumPy operations.
    """
    # 1. Compute the Dot Product (Numerator: Matrix alignment summation)
    dot_product = np.dot(vec_a, vec_b)
    
    # 2. Compute the Euclidean Norm (Denominator: L2 vector lengths)
    norm_a = np.linalg.norm(vec_a)
    norm_b = np.linalg.norm(vec_b)
    
    # Safety Check: Prevent division by zero if an empty text string yields a 0-magnitude norm
    if norm_a == 0 or norm_b == 0:
        return 0.0
        
    # 3. Apply the absolute Cosine Similarity formula
    similarity_score = dot_product / (norm_a * norm_b)
    return float(similarity_score)

if __name__ == "__main__":
    print("Initializing Day 12 Manual Mathematical Comparison Check...")
    
    # Fetch our newly verified coordinate matrix tracks from Day 10/11
    mock_corpus = [
        "Expert Python Backend Developer building APIs using FastAPI and PostgreSQL.",
        "Developer with strong experience in Python and PostgreSQL databases."
    ]
    dense_matrix, _ = generate_tfidf_matrix(mock_corpus)
    
    # Isolate individual rows as standalone vectors
    job_description_vector = dense_matrix[0]
    candidate_resume_vector = dense_matrix[1]
    
    # Execute the manual geometric comparison calculation
    match_score = calculate_pure_cosine_similarity(job_description_vector, candidate_resume_vector)
    
    print("─── Day 12 Geometric Similarity Analysis ───")
    print(f"Calculated Match Vector Distance: {match_score:.4f}")
    print(f"Percentage Match Relevance Score: {match_score * 100:.2f}%\n")