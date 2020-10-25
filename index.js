

const form = document.querySelector('.form-input');


var output = document.getElementById('output');
var box = document.querySelector('.box');
var input = document.getElementById('input');

output.style.visibility = "hidden";
box.style.visibility = "hidden";
input.style.visibility = "visible";

function draw(){
    const triangle = document.querySelector('.triangle');
    var response1 = Number(document.getElementById("question1").value);
    var response2 = Number(document.getElementById("question2").value);
    var response3 = Number(document.getElementById("question3").value);

    const num1 = response1*10;
    const num2 = response2*10;
    const num3 = response3*10;

    triangle.style.borderBottom = num1 + "px solid grey";
    triangle.style.borderLeft = num3+ "px solid transparent";
    triangle.style.borderRight = num2 + "px solid transparent";

}



form.addEventListener('submit',e => {

    output.style.visibility = "visible";
    box.style.visibility = "visible";
    input.style.visibility = "hidden";
    
    draw();

    var response1 = Number(document.getElementById("question1").value);
    var response2 = Number(document.getElementById("question2").value);
    var response3 = Number(document.getElementById("question3").value);
    var drive = document.querySelector('.drive');
    var skill = document.querySelector('.skill');
    var growth = document.querySelector('.growth');
    var summary = document.querySelector('.summary');

    if(response1<=4)
    {
        drive.innerHTML = "Your drive and motivation is relatively low. It appears that your interests, values and goals in life diverges from what you obtain from your work. There is a saying that goes like this 'Different Folks, Different Strokes.' All of us are unique and sometimes it takes a longer time to find what we are looking for. ";

    }else if(response1<=7){
        drive.innerHTML = "You are motivated to do a good job but you could be still in the process of figuring out where your career is leading. Although you have some clues about it and you know how to make things work, you have to make some compromises which might drain you at times. Trying talking to your boss to get some perspective or hear some experience on how those kinks could be ironed out so that your full potential can be unleashed.  ";

    }else{
        drive.innerHTML = "It's great that you have found the connection between between your job and your passion. This will empower your with the motivation to continue your drive towards excellence in your role. "
    }

    if(response2<=4)
    {
        skill.innerHTML = "Practice makes perfect. It takes patience, fortitude and perseverance to learn and get good at somethings Some of us get there faster, some take a longer time. But as long as you keep an open and positive mind and never give up, you will move forward. Sometimes, a change in perspective or paradigm can go a long way. Don't suffer alone and in silence. Discuss with your supervisor to look at what resouces or help you need to become more adept at your work.  ";

    }else if(response1<=7){
        skill.innerHTML = "You  have some confidence in your ability and that is good. You feel that you have the skills, knowledge and competency to do your job well. It may be good for you to figure out how you can do it even better. Trying bouncing some ideas off your supervisor to see how you can accelerate your development. Growth can come in all forms. It can taking on new projects, mentoring a new comer or getting better at presentation or communication. Be open and strive to grow even more.  ";

    }else{
        skill.innerHTML = "It’s time to take the next step and push the envelop. How do you continue to improve further? It's OK if you do not have the answer. You may find it useful to tap on your supervisor for advice on how to sustain this momentum and also get another perspective to help you uncover blindspots and discover new potential within yourself."
    }

    if(response3<=4)
    {
        growth.innerHTML = "You seem to be experiencing challenges in gaining new insights and build your skills and competencies in your current role. There may be possible circustances or roadblocks which derailed you from learning and growing in your job. Seek help and advice from your supervisor or HR to discuss possible solutions in taking things forward.   ";

    }else if(response3<=7){
        growth.innerHTML = "It good that you are experiencing reasonable growth in your role. Learning is a lifelong commitment and it always good to get better and know more. Maybe you can have a conversation with your boss to see what other development there are in store for you? Or both of you can work out a plan for your development together? ";

    }else{
        growth.innerHTML = "Life is a journey of continuous learning. It’s great that you are growing. Reflect on how you achieve this and do your best to maintain this balance and harmony in your work and life. If you ever stumble or fall, don't let it get you down. Learn to forgive yourself and step right back up. Keep doing this because learning never ends."
    }

    e.preventDefault();

    var response4 = response1+response2+response3;

    if(response4<13){
        summary.innerHTML = "You are likely going through a difficult period in some areas of your work. You could be experiencing frustration and anxiety that hinder you from realizing your true potential. Have a discussion with your superivisor or HR to see how the misalignments can be resolved. ";

    }else if(response4>13 && response4<=21){
        if(response1<5 || response2<5 || response3<5){

            summary.innerHTML = "Life is like a box of chocolate as Forrest Gump has so famoulsy said. There are ups and downs but we will get there if we perserve and keep an open mind. You might not be absolutely clear on your career path or face resistance in certain areas but you seem be moving along relatively well in some aspects.  Talk more, learn more and in time come, you will get closer to your goal. Feel free to go to your supervisor or HR anytime you need some help on how to move forward. ";

        }else if(response1>4&&response2>4&&response3>4)
        {
            summary.innerHTML = "Although there might be areas that you are not too sure of, in general you are not too far off track. You might be at crossroads in certain areas but in others you could be nearer to your goals and doing well. Continue to make strides and seek clarity in your career and you are bound to make good progress in time. Never stop learning and never stop pushing ahead. You might want to accelerate this process by checking in with your supervisor for some tips or advice.";

        }
    }else{
        if(response1<5 || response2<5 || response3<5)
        {
            summary.innerHTML = "It is great that you feel excellent in some areas. But at the same time, there are areas that you are still reconciling. Reflect on how you might leverage on the positives and strength that you have to resolve the challenges that you face in those areas and greateness will be upon you fast and furious.  ";
        }else if(response1>4&&response2>4&&response3>4){
            summary.innerHTML = "What got you here won't get you there.' Words of wisdom by world renowed CEO coach, Marshall Goldsmith and also the eponymous title of his international bestseller that might best describe where you are right now. Continue to hone your craft and seek personal mastery. With your heart and goals aligned, you will defintely be able to scale even greater heights.";
        }
       
    }
    

});



