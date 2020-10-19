import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import quotes from '../data/quotes.json';

const Tasks = () => {
  const taskState = useSelector((state) => state.taskReducer);

  const toughTasksNames = [
    "Know your goals and train accordingly.",
    "Secure your victory in your daily habits.",
    "Train smart.",
    "Choose your battles.",
    "But be ready to strike when the iron is hot.",
    "Don't train and be afraid to fail.",
    "The battle is won or lost before you step on the platform.",
    "Technique is everything.",
    "When it’s go time, pull the trigger.",
    "You learn the most from years in the trenches and under the bar.",
  ];
  const toughTasksInstructions = [
    "No matter what your goals are, you need to understand them and develop your training philosophy to suit them. With the large volume of training information out there, it’s easy to get overwhelmed and over-complicate things. If your primary goal is training for a powerlifting meet, don’t try and combine 5/3/1, Westside for Skinny Bastards, a program to improve your 40 time, and a “bigger guns in four weeks” program from a bodybuilding magazine. It sounds ridiculous, but it’s easy to find yourself trying to tailor your training to several very different goals. Know your goals, pick a proven program that suits them, and stick with it.",
    "Never underestimate the importance of daily preparation in your training. In powerlifting, how you perform on the platform will be a direct result of how you spent every day of your training cycle leading up to the meet. This doesn’t just include your time in the gym. This includes all aspects of recovery—your sleep, nutrition, stress management, and mental focus. If you discipline yourself and devote your time to preparing for success, you will succeed on meet day.",
    "Any proven program is based on strategy and getting the most out of your time in the gym. The conjugate method, 5/3/1, the Cube—the list goes on. They are all developed on the basis of training optimally and efficiently to reach a goal. As a novice lifter, you may be able to go into the gym week after week and just go crazy for heavy singles, but before long, you'll need to be more calculated. You need to have a method to your madness in order to last long term in this sport. Just because you’re in a sweaty heap on the floor or puking doesn’t necessarily mean that you’re getting stronger.",
    "In any good program, you'll be provided with some form of auto-regulation. This may be using a daily max, going for a subjective rep range, or changing your assistance work. You'll have days when you won't be at 100 percent and you must adapt accordingly. You aren’t always going to be able to go crazy and hit a PR.",
    "You can have the best program in the world, but if you don’t work hard enough, you will fail. Along with the ability to pull back some days, every good program also gives you the necessary opportunity to push yourself to your limits. Whether it’s your max-effort exercise in conjugate training or your “three or more” set in 5/3/1, there will be times when you need to get in the zone and make a PR happen.",
    "You don’t want to fail lifts regularly throughout training, but if fear of a certain weight or lift starts to control you, it’s time for that to change. If you can destroy a 490-pound deadlift, but 500 pounds barely moves off the floor, chances are you're letting that number get in your head and conquer you. Don’t let fear control you in a negative way. If you’re going for a tough attempt, don’t pace around for fifteen minutes talking yourself out of lifting it. You’ve been putting in the work. Now go execute and reap the rewards!",
    "Don’t approach the platform on meet day just hoping that you’ll maybe, somehow be able to pull off a miracle and get your attempt. This seems common sense, but it’s incredibly easy to defeat ourselves mentally before we even step on the platform. As we discussed earlier, prepare mentally and physically so that on meet day, it’s just a matter of getting in the zone and making it happen.",
    "Mental preparedness in approaching the platform isn’t just a matter of confidence. Technique and the mental focus to execute it will make or break your performance. Countless lifters have discussed the importance of mental execution in training. Developing it starts right from the second you walk into the gym. Watch training videos of some of the top professional lifters. They train in such a way as to execute every rep exactly the same.",
    "All the yelling and ammonia in the world won't get that deadlift bar off the ground if you don’t believe you can do it. Training yourself to be confident can be one of the toughest things to do, but it’s imperative for your success. Don’t let fear or doubt ruin the months of hard work that you’ve put in leading up to a meet. You’ve sweat, bled, sacrificed, and devoted yourself to training for something many will never do. Be confident in that and, when your name is called, go up to the platform and make the decision to pull the trigger.",
    "There are countless articles and resources that will greatly benefit your training, but nothing will ever replace years spent under the bar. The only way people like Dave Tate and the experts on this site were able to gain the knowledge that they share on a regular basis is through time spent overcoming adversity. They learned from both success and failure and devoted years to this sport. Read and research, but know that at the end of the day nothing can replace the lessons learned under a heavy barbell.",
  ];
  const easyTasksNames = [
    'Strong System Led by Strong Leaders.',
    'Over Train.',
    'Go High.',
    'One in a Million.',
    'Passion Pays.',
    'Managing Director.',
    'Be Weak.',
  ];
  const easyTasksInstructions = [
    "A strong system led by poor leaders will make a system poor. It is not the product that sells but the company's system and leadership that sell.  Xiaomi has no better products than Sony, LG and Motorol.  Yet Xiao Mi is the world's number 3 mobile phone maker. All because of its strong leader Lei Jun. ",
    "A team is only as good as its training. Sun Tzu knows that you can train a person for 10 years to fight a 1 day war. Yet it is the little skill that makes the difference. All these come from intense and over training.",
    "Reach customers at the highest level possible. Sometimes the highest level is the secretary.",
    "Pitch your product at a level that no other competitor can fight, like having a unique feature (eg Samsung flexible Yoom phone).",
    "Go beyond the benefits of your products and focus on your company's passion and strong belief, even if the market is not ready for it.",
    "Get the highest level in your company (eg MD) to approach the prospect, and look at the awe in their face!",
    "Instead of mentioning your strengths, mention all your weaknesses. Your prospect will be shocked that you're so upfront and he will think that the weaknesses will not pose much problems if you are sincere. Then show your confidence of resolving the weaknesses.",
  ];
  const tasksNames = taskState === 'tough' ? toughTasksNames : easyTasksNames;
  const tasksInstructions =
    taskState === 'tough' ? toughTasksInstructions : easyTasksInstructions;

  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const taskIndex = Math.floor(Math.random() * tasksNames.length);

  const showTask = () => {
    document.querySelector('.motivationBox__main').innerHTML =
      tasksNames[taskIndex];
    document.querySelector('.motivationBox__description').innerHTML =
      tasksInstructions[taskIndex];
    document.querySelector('.motivationBox__description').style.textAlign =
      'center';
    document.querySelector(
      '.motivationBox__btn--disable'
    ).style.backgroundColor = 'black';
    document.querySelector('.motivationBox__btn--disable').style.cursor =
      'auto';
  };

  return (
    <div className="motivationBox">
      <div className="motivationBox__textBox">
        <h2 className="motivationBox__main"> {quotes[quoteIndex].quote} </h2>
        <div className="motivationBox__descriptionWrapper">
          <p className="motivationBox__description">
            {' '}
            - {quotes[quoteIndex].author}{' '}
          </p>
        </div>
        <div className="motivationBox__btnContainer">
          <Link to="/start">
            <button type="button" className="motivationBox__btn">
              Thank you!
            </button>
          </Link>
          <button
            onClick={showTask}
            className="motivationBox__btn motivationBox__btn--disable"
            type="button"
          >
            Not convinced?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
