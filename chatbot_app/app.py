from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd

# Initialize Flask app
app = Flask('chatbot')
CORS(app)  # Enable CORS for cross-origin requests

# Load datasets
try:
    lecturers_data = pd.read_csv(r'C:\Users\smatt\Desktop\ProjectPulse\chatbot_app\dataset\lecturers.csv')
    coesa_data = pd.read_csv(r'C:\Users\smatt\Desktop\ProjectPulse\chatbot_app\dataset\coesa.csv')
    students_data = pd.read_csv(r'C:\Users\smatt\Desktop\ProjectPulse\chatbot_app\dataset\students.csv')
except Exception as e:
    print(f"Error loading datasets: {e}")

# Function to handle user input and generate responses
def generate_response(user_input, search_option=None, search_value=None):
    response = "No context of that information is available at the moment. Kindly reach out for support. Thanks!"
    
    if user_input == 'lecturer':
        if search_option == 'name': 
            lecturer_info = lecturers_data[lecturers_data['NAME'].str.lower() == search_value.lower()]
            if not lecturer_info.empty:
                response = lecturer_info.to_string(index=False)
            else:
                response = "No information found for the entered name."
        elif search_option == 'course': 
            lecturer_info = lecturers_data[lecturers_data['COURSE'].str.lower() == search_value.lower()]
            if not lecturer_info.empty:
                response = lecturer_info.to_string(index=False)
            else:
                response = "No information found for the entered course."

    elif user_input == 'coesa':
        if search_option == 'name': 
            coesa_member_info = coesa_data[coesa_data['NAME'].str.lower() == search_value.lower()]
            if not coesa_member_info.empty:
                response = coesa_member_info.to_string(index=False)
            else:
                response = "No information found for the entered name."
        elif search_option == 'position': 
            coesa_member_info = coesa_data[coesa_data['POSITION'].str.lower() == search_value.lower()]
            if not coesa_member_info.empty:
                response = coesa_member_info.to_string(index=False)
            else:
                response = "No information found for the entered position."

    elif user_input == 'student':
        if search_option == 'name': 
            student_info = students_data[students_data['NAME'].str.lower() == search_value.lower()]
            if not student_info.empty:
                response = student_info.to_string(index=False)
            else:
                response = "No information found for the entered name."
        elif search_option == 'surname': 
            student_info = students_data[students_data['SURNAME'].str.lower() == search_value.lower()]
            if not student_info.empty:
                response = student_info.to_string(index=False)
            else:
                response = "No information found for the entered surname."
        elif search_option == 'matric': 
            student_info = students_data[students_data['MATRIC'].str.lower() == search_value.lower()]
            if not student_info.empty:
                response = student_info.to_string(index=False)
            else:
                response = "No information found for the entered matric number."

    return response

@app.route('/chatbot', methods=['POST'])
def chatbot():
    data = request.get_json()
    user_input = data.get('user_input')
    search_option = data.get('search_option')
    search_value = data.get('search_value')
    
    response = generate_response(user_input, search_option, search_value)
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)
