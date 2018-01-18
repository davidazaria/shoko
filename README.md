# shoko - David Azaria / January 2018

## What is shoko?
My interest in language developed from a young age. Coming from a multilingual / multicultural home, my interest in language was almost predetermined for me. And as a person interested in recognizing and exploiting patterns in rather inane subjects, one might say a project like this one has been a culmination of not just my time at General Assembly, but rather life as a whole. 

And parrying off of that thought is what begotten "shoko", which is the Shona word for, well, "word". I do not speak Shona -- in fact, I might not have been able to tell you where Shona was spoken before starting my work on this app; however, now knowing a bit more about Shona, and I suppose myself, I can tell you that from a meta-perspective, I'm not surprised I spent quite a bit of time reading about its origins and relationship to other Bantu languages. But let's move on to the app itself and why I think it is important...

I am not sure whether this is an overstatement or understatement, but I think we all take the power of language for granted. Think about the strength behind choosing one word over the other. And think about for a moment how we derived those words. Why those sounds? Why do we conjugate? Why does inflection matter? And what the heck is grammar -- these seemingly arbitrarily rules we put onto ourselves to compartmentalize and structure our language. 

shoko aims to unmask some of thos questions for you with an easy to use application giving the user the power to learn more about the words they choose, e.g. their etymology, their grammatical classes, etc. A future iteration of the application aims to use the power of everyday language and natural language recognition to power SQL databases, intelligently discerning which words means what, and why, allowing non-technical individuals to derive insights into their business on their own.   

##My (shorter) problem statement
I am an infinitely curious person that has always wondered about the diverse etymological origins of any given sentence, and have for long needed a reminder about my grammatical classes. An application that is able to parse through words to determine their origins and classes, and in a future case, intent, can be infinitely powerful in businesses and people who rely, either for professional or edfication reasons, so much on the written language.  

## My wireframe
My initial set of wireframes can be found in the `wireframes` folder of this repository.

## My initial thoughts on app structure 
Current version of this application I envision being a web-application form a user can enter anywhere from a single word to a block of text to analyze for a word or a series of words' etymologies, grammatical classes, tense, etc. By leveraging the power of third party API's, I hope to make this a seamless process for both me as the developer and the user. 

A stretch goal for this project will be integrating the application into a Slackbot, returning the same information back as either a JSON object or another easy to read format. More TK there. The point of the Slackbot integration is to stretch my skills as a creative developer to plug third party software with something homegrown. The purposes of "shoko" over Slack is somewhat similar to what Grammarly might be able to provide, but solely for educational purposes. A more powerful Slackbot here would be the natural language powered SQL queries; something I still aim to do.

## How it works
Still in development.

## Technologies used
At the moment I envision this being a JavaScript powered application, and I look to incorporate React as well for the front-end development.

## Phases to completion
**Phase 1** - Project inception and planning. In this phase, I look to flesh out the steps I will need to take, i.e. user stories, to deliver this project on either Friday January 26, 2018 or Monday January 29, 2018 (date still TBD). In addition, there will be investigation into the third party API's to ensure good use case functionality. **Due Thursday January 18, 2018** 

**Phase 2** - Setting up local server and React app. Would like to investigate deploying Webpack. Can I successfully make an API call with one or more words will be the biggest deliverable here. **Due Friday January 19, 2018**

**Phase 3** - POC and MVP feature-building, including but not limited to developing the forms and capturing the data to run through the third party API. First step there would be developing the ability to parse through the words; I belive there might be an `npm` package that might be able to help me do so. **Due Monday January 22, 2018**

**Phase 4** - More feature development for a more robust user experience, at this point being able to parse words and making asynchronous calls to a third party API displaying in order some details I look to capture about a word. **Due Wednesday January 24, 2018**

**Phase 5** - Final deliverable of a functioning app that takes a list of words delivered by a user; successfully parses through the words; run API calls on those words to return back etymologies, grammatical classes, or other pieces of information a user might find interesting. Stretch goal would be a Slackbot. **Due Friday January 26, 2018 or Monday January 29, 2018**.

## Links and Resources
