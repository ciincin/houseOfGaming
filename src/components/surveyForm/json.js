export const json = {
    "title": "House of gaming - Game survey",
    "description": "This survey was created to recommend you different free to play videogames depending on your answers.",
    "logo": "https://i.imgur.com/oeO6Pn6.png",
    "logoWidth": "500px",
    "logoHeight": "300px",
    "logoPosition": "right",
    "completedHtml": "<h3>Thank you for completing the survey !</h3>",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question1",
        "title": "How often do you play video games?",
        "choices": [
         {
          "value": "Daily",
          "text": "Daily"
         },
         {
          "value": "Twice a week",
          "text": "Twice a week"
         },
         {
          "value": "On the weekend",
          "text": "On the weekend"
         },
         {
          "value": "On holidays",
          "text": "On holidays"
         }
        ]
       }
      ]
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "tagbox",
        "name": "selectedGenres",
        "title": "Select your favorite game's genre",
        "isRequired": true,
        "choices": [
         {
          "value": "ARPG",
          "text": "ARPG"
         },
         {
          "value": "Action",
          "text": "Action"
         },
         {
          "value": "Action Game",
          "text": "Action Game"
         },
         {
            "value": "Action RPG",
            "text": "Action RPG"
           },
           {
            "value": "Battle Royale",
            "text": "Battle Royale"
           },
           {
            "value": "Card",
            "text": "Card"
           },
           {
            "value": "Card Game",
            "text": "Card Game"
           },
           {
            "value": "Fantasy",
            "text": "Fantasy"
           },
           {
            "value": "Fighting",
            "text": "Fighting"
           },
           {
            "value": "MMO",
            "text": "MMO"
           },
           {
            "value": "MMOARPG",
            "text": "MMOARPG"
           },
           {
            "value": "MMORPG",
            "text": "MMORPG"
           },
           {
            "value": "MOBA",
            "text": "MOBA"
           },
           {
            "value": "Racing",
            "text": "Racing"
           },
           {
            "value": "Shooter",
            "text": "Shooter"
           },
           {
            "value": "Social",
            "text": "Social"
           },
           {
            "value": "Sports",
            "text": "Sports"
           },
           {
            "value": "Strategy",
            "text": "Strategy"
           }
        ]
       }
      ]
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "radiogroup",
        "name": "platform",
        "title": "Which do you prefer to play games on?",
        "isRequired": true,
        "choices": [
         {
          "value": "Web Browser",
          "text": "Web browser"
         },
         {
          "value": "PC (Windows)",
          "text": "PC download"
         }
        ]
       }
      ]
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "text",
        "name": "question4",
        "title": "What do you expect from a free to play game?",
        "description": "Tell us about your preferences here."
       }
      ]
     },
     {
      "name": "page5",
      "elements": [
       {
        "type": "radiogroup",
        "name": "preferenceRelease",
        "title": "I prefer playing...",
        "isRequired": true,
        "choices": [
         {
          "value": "Old games",
          "text": "Old games"
         },
         {
          "value": "New games",
          "text": "New games"
         },
         {
          "value": "No preference",
          "text": "No preference"
         }
        ]
       }
      ]
     }
    ]
   }
