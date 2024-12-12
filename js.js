
function appendMessage(user, message) {
    const chatOutput = document.getElementById('chat-output');
    chatOutput.innerHTML += `<strong>${user}:</strong> ${message}<br>`;
}


function handleAPIResponse(response) {
	
    appendMessage('Assistant ', response);
}


    
function handleConversationStep(input) {

    if (input === 'bonjour' || input === 'salut' || input === 'hello' || input === 'Bonjour' || input === 'Salut' || input === 'Hello') {
        handleAPIResponse('Bonjour! Comment puis-je vous aider ?');
    if (input === 'Hello')
     handleAPIResponse('Hello ! How can I help you ?');
     if (input === 'hello')
     handleAPIResponse('Hello ! How can I help you ?');
} else if (input === 'aide' || input === 'help') {
        handleAPIResponse("Je suis là pour vous aider. Posez-moi n'importe quelle question concernant les admissions, les inscriptions, les cours, les installations du campus, l'aide financière ou le calendrier académique.");
    } else if (input.includes('admissions') || input.includes('admission')) {
        handleAPIResponse("Pour les questions concernant les admissions à l'Université Ibn Zohr, veuillez contacter le service des admissions à l'adresse email admissions@ibnzohr.ac.ma");
    } else if (input.includes('inscriptions') || input.includes('inscription')) {
        handleAPIResponse("Pour les questions concernant les inscriptions à l'Université Ibn Zohr, veuillez contacter le service des inscriptions à l'adresse email inscriptions@ibnzohr.ac.ma");
    } else if (input.includes('cours') || input.includes('programme')) {
        handleAPIResponse("Vous pouvez trouver les informations sur les cours et les programmes d'études sur le site web de l'Université Ibn Zohr : www.ibnzohr.ac.ma");
    } else if (input.includes('installations du campus') || input.includes('campus')) {
        handleAPIResponse("L'Université Ibn Zohr dispose de nombreuses installations sur le campus, y compris des bibliothèques, des laboratoires, des installations sportives et bien plus encore. Vous pouvez en savoir plus sur les installations sur le site web de l'université.");
    } else if (input.includes('aide financière') || input.includes('bourse')) {
        handleAPIResponse("Pour les informations sur l'aide financière et les bourses d'études, veuillez contacter le service des bourses à l'adresse email bourses@ibnzohr.ac.ma");
    } else if (input.includes('calendrier académique') || input.includes('emploi du temps')) {
        handleAPIResponse("Le calendrier académique de l'Université Ibn Zohr est disponible sur le site web de l'université. Vous pouvez consulter les dates importantes telles que le début des cours, les périodes d'examens, etc.");
    } else {
        handleAPIResponse("Je ne comprends pas. Veuillez réessayer ou posez-moi une autre question concernant les admissions, les inscriptions, les cours, les installations du campus, l'aide financière ou le calendrier académique.");
    }

    
}

function handleUserInput() {
    const userInput = document.getElementById('user-input').value;
    appendMessage('Vous', userInput);
    document.getElementById('user-input').value = '';

    handleConversationStep(userInput);
}


document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});


handleAPIResponse('Bonjour ! Comment puis-je vous aider ?');

function handleAPIResponse(response) {
    const chatOutput = document.getElementById('chat-output');

    
    const loadingAnimation = document.createElement('div');
    loadingAnimation.className = 'loading-animation';
    loadingAnimation.innerHTML = '<div class="loading-dot"></div><div class="loading-dot"></div><div class="loading-dot"></div>';
    chatOutput.appendChild(loadingAnimation);

    setTimeout(() => {
        
        chatOutput.removeChild(loadingAnimation);

        const message = document.createElement('div');
        message.className = 'chat-message';
        message.innerHTML = `<strong>Assistant :</strong> ${response}`;
        chatOutput.appendChild(message);

        
        chatOutput.scrollTop = chatOutput.scrollHeight;
    }, 1500); 
}
document.addEventListener("DOMContentLoaded", function() {
    const chatbot = document.getElementById("chatbot");
    const chatToggleButton = document.getElementById("chat-toggle-button");
    const toggleChatbotButton = document.getElementById("toggle-chatbot");

    chatbot.classList.add("show");
    chatToggleButton.classList.add("show");

    toggleChatbotButton.addEventListener("click", () => {
        chatbot.style.display = "none";
        chatToggleButton.style.display = "block";
    });

    chatToggleButton.addEventListener("click", () => {
        chatbot.style.display = "block";
        chatToggleButton.style.display = "none";
    });
});

// Importez la bibliothèque "natural"
const natural = require('natural');

// Configurez le correcteur d'orthographe
const spellCorrector = new natural.Spellcheck();

document.addEventListener("DOMContentLoaded", function() {
    // ... Votre code existant ...

    document.getElementById("user-input").addEventListener("keypress", function (e) {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });

    function handleUserInput() {
        const userInput = document.getElementById('user-input').value;

        // Utilisez le correcteur d'orthographe de "natural"
        const correctedInput = spellCorrector.correct(userInput);

        appendMessage('Vous', userInput);

        // Utilisez le texte corrigé pour la suite de la conversation
        handleConversationStep(correctedInput);
    }

    // ... Votre code existant ...
});



