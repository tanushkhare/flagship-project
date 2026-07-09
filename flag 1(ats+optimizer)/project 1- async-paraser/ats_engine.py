import re

def optimize_resume(resume_text, job_description):
    """
    A professional-grade ATS logic skeleton.
    1. Extracts keywords.
    2. Calculates a match score.
    3. Provides actionable advice.
    """
    
    # 1. Define skills to look for (you can expand this later)
    required_skills = ["Python", "FastAPI", "React", "Docker", "SQL", "AWS", "Git"]
    
    # 2. Extract found skills
    found_skills = [skill for skill in required_skills if re.search(skill, resume_text, re.IGNORECASE)]
    
    # 3. Calculate simple score
    score = int((len(found_skills) / len(required_skills)) * 100)
    
    # 4. Generate feedback
    missing_skills = [skill for skill in required_skills if skill not in found_skills]
    
    advice = "Your profile is strong."
    if score < 50:
        advice = "To improve your chances, focus on adding projects that demonstrate these missing skills."
    elif score < 80:
        advice = "Great start! Try to include more specific metrics for your technical projects."

    return {
        "score": score,
        "found_skills": found_skills,
        "missing_skills": missing_skills,
        "advice": advice
    }