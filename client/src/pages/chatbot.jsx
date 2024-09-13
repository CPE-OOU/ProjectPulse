import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
    const [step, setStep] = useState(1);
    const [userInput, setUserInput] = useState('');
    const [searchOption, setSearchOption] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [responses, setResponses] = useState([]);
    const [initialMessageDisplayed, setInitialMessageDisplayed] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const responseContainerRef = useRef(null);

    useEffect(() => {
        if (!initialMessageDisplayed) {
            setResponses(['How can I assist you today? Enter "lecturer", "student", or "coesa", or type "quit" to exit.']);
            setInitialMessageDisplayed(true);
        }
    }, [initialMessageDisplayed]);

    useEffect(() => {
        if (responseContainerRef.current) {
            responseContainerRef.current.scrollTop = responseContainerRef.current.scrollHeight;
        }
    }, [responses, isTyping]);

    const typeResponse = (text) => {
        setIsTyping(true);
        let index = 0;
        const prefix = 'PP bot: ';
        const typingInterval = setInterval(() => {
            setResponses((prevResponses) => {
                const lastResponse = prevResponses[prevResponses.length - 1] || prefix;
                const updatedResponse = lastResponse + (text[index] || '');
                return [...prevResponses.slice(0, -1), updatedResponse];
            });
            index++;
            if (index >= text.length) {
                clearInterval(typingInterval);
                setIsTyping(false);
            }
        }, 25);

        if (text) {
            setResponses((prevResponses) => [...prevResponses, '']);
        }
    };

    const handleUserInput = () => {
        const input = userInput.trim().toLowerCase();
        if (input === 'quit') {
            setResponses([...responses, `Me: ${userInput}`]);
            typeResponse(' Thank you for using the chatbot. Goodbye!');
            resetChat();
            return;
        }
        if (!userInput.trim()) return;

        setResponses([...responses, `Me: ${userInput}`]);

        if (['student', 'lecturer', 'coesa'].includes(input)) {
            typeResponse(` Please enter a search option for ${input} (e.g., name, surname, matric, position, course).`);
            setStep(2);
        } else {
            typeResponse(' Invalid category. Please enter either "student", "lecturer", or "coesa".');
            setUserInput('');
        }
    };

    const handleSearchOption = () => {
        const option = searchOption.trim().toLowerCase();
        if (option === 'quit') {
            setResponses([...responses, `Me: ${searchOption}`]);
            typeResponse(' Thank you for using the chatbot. Goodbye!');
            resetChat();
            return;
        }
        if (!searchOption.trim()) return;

        setResponses([...responses, `Me: ${searchOption}`]);

        let validOptions = [];

        if (userInput.toLowerCase() === 'student') {
            validOptions = ['name', 'surname', 'matric'];
        } else if (userInput.toLowerCase() === 'lecturer') {
            validOptions = ['name', 'course'];
        } else if (userInput.toLowerCase() === 'coesa') {
            validOptions = ['name', 'position'];
        } else {
            typeResponse(' Invalid category. Please start again with either "student", "lecturer", or "coesa".');
            resetChat();
            return;
        }

        if (validOptions.includes(searchOption.toLowerCase())) {
            typeResponse(` Please enter the search value for ${searchOption}.`);
            setStep(3);
        } else {
            typeResponse(` Invalid search option for ${userInput}. Please enter a valid option (${validOptions.join(', ')}).`);
            setSearchOption('');
            setStep(2);
        }
    };

    const handleSubmit = async () => {
        const value = searchValue.trim().toLowerCase();
        if (value === 'quit') {
            setResponses([...responses, `Me: ${searchValue}`]);
            typeResponse(' Thank you for using the chatbot. Goodbye!');
            resetChat();
            return;
        }
        if (!searchValue.trim()) return;

        setResponses([...responses, `Me: ${searchValue}`]);

        const data = {
            user_input: userInput,
            search_option: searchOption,
            search_value: searchValue
        };

        try {
            const response = await fetch('http://127.0.0.1:5000/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();

            if (responseData.response.includes('No information found')) {
                typeResponse(` ${responseData.response}. Please try again with a different ${searchOption}.`);
                setSearchValue('');
                setStep(3);
            } else {
                setResponses((prevResponses) => [
                    ...prevResponses,
                    `PP bot: ${responseData.response}`,
                    'PP bot: Let\'s do this again! Enter "lecturer", "student", or "coesa", or type "quit" to exit.'
                ]);
                resetChat();
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (step === 1) {
                handleUserInput();
            } else if (step === 2) {
                handleSearchOption();
            } else if (step === 3) {
                handleSubmit();
            }
        }
    };

    const resetChat = () => {
        setUserInput('');
        setSearchOption('');
        setSearchValue('');
        setStep(1);
    };

    return (
        <div className="flex flex-col h-full max-w-xs bg-white shadow-lg rounded-lg border border-gray-300">
            <div className="flex-1 overflow-auto p-4 bg-gray-50" ref={responseContainerRef}>
                {responses.map((response, index) => (
                    <p key={index} className={`my-2 p-2 rounded-lg ${response.startsWith('Me:') ? 'bg-gray-200 text-black text-right' : 'bg-blue-100 text-blue-900'}`}>
                        {response}
                    </p>
                ))}
                {isTyping && <p className="italic text-gray-500">PP bot is typing...</p>}
            </div>
            <div className="p-4">
                <input
                    type="text"
                    placeholder={step === 1 ? 'Type in "message"' : step === 2 ? 'Search Option' : 'Search Value'}
                    value={step === 1 ? userInput : step === 2 ? searchOption : searchValue}
                    onChange={(e) => {
                        if (step === 1) setUserInput(e.target.value);
                        else if (step === 2) setSearchOption(e.target.value);
                        else setSearchValue(e.target.value);
                    }}
                    onKeyDown={handleKeyPress}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
                <button
                    onClick={step === 1 ? handleUserInput : step === 2 ? handleSearchOption : handleSubmit}
                    className="w-full mt-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                    SEND
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
