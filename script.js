document.addEventListener('DOMContentLoaded', function() {
    const killerInput = document.getElementById('killer-input');
    const submitBtn = document.getElementById('submit-btn');
    const hintBtn = document.getElementById('hint-btn');
    const hintText = document.getElementById('hint-text');
    const wrongAnswer = document.getElementById('wrong-answer');
    const mysteryPage = document.getElementById('mystery-page');
    const loveLetter = document.getElementById('love-letter');
    const letterContent = document.getElementById('letter-content');
    
    const correctAnswer = "Thomas Crane";
    
    const loveLetterText = `        
        <p>Good job solving the mystery baby! I'm sure it wasn't very hard for you, but you still did so so good!</p>
        
        <p>Ever since I met you, I knew you were the one for me. Your amazing smile, your sweet laugh, your perfect style, all of it. Every single thing about you just further convinced me that I would never love anyone else.</p>
        
        <p>I cherish every second I get to spend with you. From going on dates, watching movies, playing games, sitting on FaceTime in silence, working on homework together, watching YouTube, chilling at our houses, all of it. All of it has been an unforgettable adventure.</p>
        
        <p>You're my best friend. I couldn't imagine what my life would be like without you, and I hope I never have to know that feeling. You are so kind, brave, funny, sweet, and perfect in every way. Simply knowing you makes me so gifted, but getting to call you mine makes me the luckiest guy on Earth.</p>
        
        <p>I promise that I will keep loving you with every ounce of my heart, no matter what happens. I will never lose faith in you or doubt you for a second. You're the light that guides me through everything, and I will never forget all that you've done for me.</p>
        
        <p>Thank you for being you. Thank you for choosing me. Thank you for making life so beautiful.</p>
        
        <p>Happy anniversary, my love. Here's to many, many more.</p>
    `;
    
    hintBtn.addEventListener('click', function() {
        hintText.classList.remove('hidden');
    });
    
    submitBtn.addEventListener('click', checkAnswer);
    
    killerInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkAnswer();
        }
    });
    
    function checkAnswer() {
        const userAnswer = killerInput.value.trim().toLowerCase();
        if (userAnswer === correctAnswer.toLowerCase()) {
            mysteryPage.classList.add('hidden');
            loveLetter.classList.remove('hidden');
            letterContent.innerHTML = loveLetterText;
            window.scrollTo(0, 0);
        } else {
            wrongAnswer.classList.remove('hidden');
            killerInput.value = '';
            killerInput.focus();
            
            setTimeout(function() {
                wrongAnswer.classList.add('hidden');
            }, 3000);
        }
    }
}); 