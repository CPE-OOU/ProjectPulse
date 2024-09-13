import pandas as pd # For data computation

# Load dataset from CSV files
lecturers_data = pd.read_csv(r'C:\Users\smatt\Desktop\ProjectPulse\chatbot_app\dataset\lecturers.csv')
coesa_data = pd.read_csv(r'C:\Users\smatt\Desktop\ProjectPulse\chatbot_app\dataset\coesa.csv')
students_data = pd.read_csv(r'C:\Users\smatt\Desktop\ProjectPulse\chatbot_app\dataset\students.csv')

# Function to handle user input and generate responses
def generate_response(user_input):

    # The user input is about LECTURER
    if user_input == 'lecturer':
        search_option = input("Choose between 'NAME' of lecturer or 'COURSE' assigned : ")
        if search_option == 'name': 
            lecturer_name = input("Enter Lecturer's Name: ")
            lecturer_info = lecturers_data[lecturers_data['NAME'] == lecturer_name]
            if not lecturer_info.empty:
                response = lecturer_info.to_string(index=False)
            else:
                response = "No information found for entered name"

        elif search_option == 'course': 
            lecturer_course = input("Enter Course code: ")
            lecturer_info = lecturers_data[lecturers_data['COURSE'] == lecturer_course]
            if not lecturer_info.empty:
                response = lecturer_info.to_string(index=False)
        else:
            response = "No information found for entered course"

    # The user input is about COESA
    elif user_input == 'coesa':
        search_option = input("Choose between 'NAME' or 'POSITION' of COESA Member : ")
        if search_option == 'name': 
            coesa_member_name = input("Enter COESA Member's Name: ")
            coesa_member_info = coesa_data[coesa_data['NAME'] == coesa_member_name]
            if not coesa_member_info.empty:
                response = coesa_member_info.to_string(index=False)
            else:
                response = "No information found for entered name"

        elif search_option == 'position': 
            coesa_member_positon = input("Enter COESA Member's Position: ")
            coesa_member_info = coesa_data[coesa_data['POSITION'] == coesa_member_positon]
            if not coesa_member_info.empty:
                response = coesa_member_info.to_string(index=False)
            else:
                response = "No information found for entered position"


    # The user input is about STUDENT
    elif user_input == 'student':
        search_option = input("Choose between 'NAME', 'SURNAME', or 'MATRIC' of student : ")
        if search_option == 'name': 
            student_name = input("Enter Student's Name: ")
            student_info = students_data[students_data['NAME'] == student_name]
            if not student_info.empty:
                response = student_info.to_string(index=False)
            else:
                response = "No information found for entered name"

        elif search_option == 'surname': 
            student_surname = input("Enter Student's Surname: ")
            student_info = students_data[students_data['SURNAME'] == student_surname]
            if not student_info.empty:
                response = student_info.to_string(index=False)
            else:
                response = "No information found for entered surname"

        elif search_option == 'matric': 
            student_matric = input("Enter Student's Matric No.: ")
            student_info = students_data[students_data['MATRIC'] == student_matric]
            if not student_info.empty:
                response = student_info.to_string(index=False)
            else:
                response = "No information found for entered matric"

    else:
        response = "No context of that information is available at the moment, Kindly reach out for support. Thanks!"
    
    return response

# Welcome Message
print("Welcome to the Computer Engineering Chatbot! How can I assist you today?")

# Main program loop
while True:
    user_input = input("Go for 'lecturer', 'student' or 'coesa' otherwise 'quit': ")
    if user_input == 'quit':
        break
    response = generate_response(user_input)
    print("C.E Chatbot:", response)
print("Thank you for using the Computer Engineering Chatbot!")
