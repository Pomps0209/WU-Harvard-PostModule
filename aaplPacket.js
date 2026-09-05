// Pre-loaded Apple (AAPL) Research Packet and Prompts

export const SYSTEM_PROMPT = `You are an equity research assistant preparing notes for an analyst.
You will be given a JSON packet containing an earnings call context, sentiment measurements, and extracted facts for Apple (AAPL).

Rules:
1. Use only the provided packet. Do not add outside knowledge or search the web.
2. Attribute every claim to which section it came from (context, sentiment, or extraction).
3. Distinguish what management asserted from what analysts questioned.
4. Quote forward looking statements verbatim when you cite them.
5. If the packet does not answer part of the question, say so plainly.
6. Do not give investment advice or a buy/sell view.
7. Be concise. Bullet points and short paragraphs, not walls of prose.`;

export const USER_PROMPT_TEMPLATE = `Attached below is a research packet for Apple (AAPL).
Please draft a one page research note covering:

1. What management emphasized in this quarter. Which products, which segments, which figures?
2. How the tone reads. Is management more positive than the analysts? Which speaker was most positive, which most negative?
3. The specific forward looking statements management made. Quote them.
4. Where the context (news, macro alerts) supports or complicates the company's own account.
5. What you would want to see next quarter to confirm or reject this reading.`;

export const AAPL_PACKET = {
  "meta": {
    "symbol": "AAPL",
    "reporting_company": "Apple",
    "report_date": "2026-04-30",
    "assembled_at": "2026-08-04 11:07:19 EDT"
  },
  "context": {
    "assembled_text": `=== PRIMARY SOURCE: COMPANY STATEMENTS ===
Good afternoon, welcome to the Apple Q2 fiscal year 2026 earnings conference call. My name is Suhasini Chandramouli, Director of Investor Relations. Today's call is being recorded. Speaking first today is Apple CEO Tim Cook. John Ternus will be joining after that for a brief set of remarks, and he'll be followed by CFO Kevan Parekh. After that, we'll open the call to questions from analysts. Please note that some of the information you'll hear during our discussion today will consist of forward-looking statements, including, without limitation, those regarding revenue, gross margin, operating expenses, other income and expense, taxes, capital allocation, and future business outlook.
These statements involve risks and uncertainties that may cause actual results or trends to differ materially from our forecast, including risks related to the potential impact to the company's business and results of operations from macroeconomic conditions, tariffs and other measures, and legal and regulatory proceedings. For more information, please refer to the risk factors discussed in Apple's most recently filed reports on Form 10-Q and Form 10-K and the Form 8-K filed with the SEC today, along with the associated press release. Additional information will also be in our report on Form 10-Q for the quarter ended March 28th, 2026 to be filed tomorrow and in other reports and filings we make with the SEC. Apple assumes no obligation to update any forward-looking statements which speak only as of the date they are made. I'd now like to turn the call over to Tim for introductory remarks.
Thank you, Suhasini. Good afternoon, everyone, and thanks for joining the call. Before we get into the quarter, I wanted to take a moment to talk about the transition we recently announced. I just celebrated my 28th anniversary of being here at Apple, 15 years as CEO. In fact, this will be my 89th earnings call. I'll always be proud of the impact Apple has had on our users' lives, and I can't begin to express how grateful I am for our amazing teams. It's because of them that there is no company like Apple, and I truly believe there never will be. This moment for the transition is the right one for a number of reasons. First, our business has been performing extremely well. The first half of this year was very strong, growing double digits year-over-year. Second, our roadmap is incredible.
Most importantly, we have the right leader ready to step into the role. As I have said, there is no 1 on this planet I trust more to lead Apple into the future than John Ternus. John is a brilliant engineer, a deep thinker, a person of remarkable character, and a born leader. I know he will push us to go further than we think is possible in order to deliver the greatest products and services for our users. I have been so proud to call him a colleague and a friend, and I will be even more proud to call him Apple's CEO. Over the coming months, John and I will be working closely together to make sure this transition is perfectly smooth. I very much look forward to stepping into the role of Executive Chairman on September 1st.
As I've told John, I will be here to support him in any way he needs and in any way I can. I am incredibly optimistic about Apple's future, and I know we have the right team in place to deliver on the promise of this company. I also want to take just a moment to share my profound gratitude for our shareholders, especially our long-term shareholders, for believing in Apple and for your support over the years. It means a great deal to all of us. With that, I'd like to bring John on the call for a moment to say a few words. John?
Thanks, Tim, and thanks to everyone on the call. In my view, Tim is one of the greatest business leaders of all time. Stepping into the role of CEO is an incredible honor, and it means a great deal to me to have Tim's trust and confidence. I want to echo Tim's sentiment about our shareholders, especially those who have been with us for many years. Thank you so much for your confidence in our company. As you know, one of the hallmarks of Tim's tenure has been a deep thoughtfulness, deliberateness, and discipline when it comes to the financial decision-making of the company. I want you to know that is something Kevan and I intend to continue when I transition into the role in September. This is an especially exciting moment for Apple. As Tim mentioned, we have an incredible roadmap ahead.
While you're not going to get me to talk about the details of that roadmap, suffice it to say this is the most exciting time in my 25-year career at Apple to be building products and services. There are so many opportunities before us, and I couldn't be more optimistic about what's to come. For now, let me simply say I am deeply grateful to Tim, to the executive team, and to everyone at Apple, and I look forward to all of the important work ahead. With that, let me turn it back over to Tim.
Thanks, John. Let me turn to the quarter. Today, Apple is proud to report $111.2 billion in revenue, up 17% from a year ago, and a March quarter record, which was above the high end of our guidance range despite supply constraints. Customer enthusiasm for iPhone has been extraordinary, with revenue growing 22% year-over-year to achieve a March quarter record. Services reached an all-time revenue record, growing 16% from a year ago, while EPS set a March quarter record of $2.01, up 22% year-over-year. We set March quarter revenue records and grew double digits in every geographic segment, including strong double-digit growth in Greater China and the rest of Asia Pacific.
We also achieved March quarter revenue records in both developed and emerging markets and saw double-digit growth in nearly every emerging market we track, including India. We recently marked Apple's 50th anniversary with celebrations in our retail stores and with users around the world. It was a special moment for us to reflect on the incredible journey we've shared with our users, to thank everyone who's been a part of it, and to look forward to writing the next chapter in our story of innovation. We have always believed that people who think different can change the world, and we have been proud to build tools and technologies that allow them to do just that. In March, we put an amazing showcase of human creativity and ingenuity in action with updates across iPhone, iPad, and Mac.
Through an unforgettable week of innovation, we also unveiled MacBook Neo, giving us an opportunity to bring the power of Mac to more people than ever before. I'll have more to say on that and all the incredible things we delivered for our customers over the last few months. Let's take a closer look at results from across our product line, beginning with iPhone. As I mentioned earlier, iPhone had an excellent quarter with $57 billion in revenue, a March quarter record despite supply constraints. During the quarter, we welcomed iPhone 17e, the newest addition to what is already the strongest iPhone lineup we've ever had. It brings outstanding performance and core iPhone experiences at a remarkable value for everyone from enterprise teams to consumers. Across the lineup, this is the most powerful, capable, and versatile iPhone family we've ever created.
That starts with the latest in Apple silicon for iPhone, A19 and A19 Pro, which include neural accelerators in the GPU to deliver a huge boost to AI performance. With incredible performance and battery life and deep integration of Apple Intelligence, iPhone continues to set the standard for what a smartphone can be. Customers are capturing stunning photos and videos with our most advanced camera system ever on iPhone 17 Pro and Pro Max, including an 8x optical quality zoom and the all-new Center Stage front camera, unlocking entirely new ways to frame, create, and share their moments. In fact, during their recent mission, Artemis II astronauts captured some truly otherworldly images of Earth and space using iPhone 17 Pro Max. Meanwhile, iPhone Air users are tapping into the pro-level performance in our slimmest iPhone ever.
With iPhone 17, we're seeing a strong response, not only from customers upgrading from previous generations, but also from people choosing iPhone for the very first time. We've been enormously pleased with how the entire lineup has been received. In fact, the iPhone 17 family is now the most popular lineup in our history when looking at the launch through the March quarter. According to IDC, we gained market share during the quarter. Mac revenue was $8.4 billion for the March quarter, up 6% from a year-ago, despite supply constraints driven by higher-than-expected levels of demand. We're delighted with the reception of what is the most advanced Mac lineup in our history. We set March quarter records for upgraders and customers new to Mac. According to IDC, we gained market share in the quarter.
From Mac mini to MacBook Pro and everything in between, Mac is the best platform for AI, with Apple silicon delivering exceptional performance, industry-leading efficiency, and the ability to run advanced models locally in ways that simply weren't possible before. It's so exciting to see how strongly users are embracing Mac for these capabilities. There's tremendous enthusiasm for MacBook Neo, which made its debut during the March quarter, opening up an entirely new way to experience Mac at a breakthrough price. We've also further improved MacBook Air, already the world's most popular laptop, with M5, making everyday tasks faster and more responsive than ever. MacBook Pro reaches new heights with M5 Pro and M5 Max, delivering extraordinary performance and dramatically advancing what users can do with AI on a portable system.
For desktop users, Studio Display pairs beautifully with Mac, while the all-new Studio Display XDR takes things even further, bringing unmatched image quality and an extraordinarily immersive experience to pro workflows. Turning to iPad, revenue was $6.9 billion, up 8% from a year ago. iPad continues to be a great choice for students, small business owners, artists, and so many others because it empowers entirely new ways to work, learn, create, and connect. It's not just about mobility. It's about versatility, delivering a uniquely flexible experience that adapts to whatever users want to accomplish. Today, our iPad lineup is stronger than ever, led by the arrival of the M4-powered iPad Air. With a remarkable leap in performance, it raises the bar for what users can do on iPad, from advanced creative workflows to powerful productivity and immersive learning.
With the addition of our latest Apple silicon, along with the N1 wireless networking chip and C1X modem, users can stay seamlessly connected wherever they are. Across wearables, home, and accessories, revenue for the March quarter came in at $7.9 billion, up 5% from a one year ago. Apple Watch Ultra 3, Apple Watch Series 11, and Apple Watch SE continue to play an essential role in users' lives, going far beyond fitness tracking to deliver meaningful insights and support for their health and well-being. From helping users stay active and reach their fitness goals to delivering powerful, science-backed health insights that can prompt meaningful conversations with care providers, Apple Watch is with them every step of the way. It's tremendously meaningful to see how Apple Watch continues to empower users to better understand their health, make more informed decisions, and in many cases change and even save lives.
During the quarter, we introduced customers to a new level of audio experience with AirPods Max 2, delivering stunning sound quality and our most advanced active noise cancellation yet. At the same time, AirPods Pro 3 combine an incredibly immersive listening experience with intelligent features that adapt to how users move, train, and live. Whether it's a call across town or a conversation across continents, AirPods make it effortless to stay connected. AirPods can bridge languages too, thanks to live translation powered by Apple Intelligence. In addition to live translation, Apple Intelligence brings together dozens of powerful capabilities from visual intelligence to cleanup in photos that are seamlessly integrated into the moments that matter most to our users every day. We look forward to bringing a more personalized Siri to users coming this year.
What truly sets Apple apart is how Apple Intelligence is woven into the core of our platforms, powered by Apple silicon and designed from the ground up to deliver intelligence that is fast, personal, and private. This is not AI as a standalone feature, but AI as an essential, intuitive part of the experience across our devices. It builds on years of innovation, from the neural engine to advanced on-device processing, enabling capabilities that are not only incredibly powerful, but also respectful of user privacy. Increasingly, that same foundation is drawing developers and researchers to our products as powerful platforms for building and running agentic AI, thanks to the unique combination of performance, efficiency, and on-device capabilities. When you combine this level of integration with our relentless focus on the customer experience, it becomes clear why Apple platforms are the best place to experience AI.
Now let's turn to services, which set an all-time revenue record with $31 billion. We saw double-digit growth in both developed and emerging markets and set new all-time revenue records across most of the services categories. There's no better place to find celebrated storytellers than Apple TV. Audiences are applauding the return of shows like Your Friends & Neighbors, Shrinking, and For All Mankind, while discovering new favorites like Widow's Bay. Apple TV has also earned its place among the most decorated names in entertainment, with more than 800 wins and more than 3,400 nominations in the six years since launch. This is a great time for sports fans on Apple TV too. Formula One season kicked off in March, and Apple TV subscribers in the U.S. have one of the best views of the track.
The new MLS season is also well underway, and subscribers in more than 100 countries and regions can watch every match with no blackouts. Friday Night Baseball returned for its fifth year on Apple TV with a full season of marquee matchups. In retail, we had a March quarter revenue record and saw very high levels of store traffic throughout the quarter. From New York to Chengdu to Paris, it was wonderful to see stores around the world at the center of Apple's 50th anniversary celebrations. We were also thrilled to open the doors to our sixth store in India. It has been wonderful to see how we've continued to grow in India in recent years, part of our larger efforts to connect with even more customers in emerging markets all over the world.
At Apple, we believe powerful innovation and uncompromising quality can go hand in hand with sustainability. Over the last year, we've reached new milestones in the environment, including the use of recycled content in 30% of the materials in all of our products shipped in 2025, the most we've ever had. That includes the use of 100% recycled cobalt in all Apple-designed batteries and 100% recycled rare earth elements in all magnets. We've also achieved our goal of removing plastic from packaging with every Apple product now shipping in fiber-based packaging. All of this is a testament to the outstanding forward-thinking and innovative work of our teams. We're also making great progress in advancing American supply chain innovation.
As part of our $600 billion commitment to the U.S., we were pleased to share recently that Mac mini production is coming to America later this year, expanding our factory operations in Houston with a brand-new facility. In March, we were thrilled to welcome four new companies to our American manufacturing program to help manufacture essential materials and components for Apple products sold worldwide. These include sensors that support key iPhone features like camera stabilization and integrated circuits essential for features like crash detection and activity tracking. These efforts build on the progress we've made in the American manufacturing program, including the work we're doing to advance an end-to-end silicon supply chain across the U.S. At TSMC's Arizona facility, for example, Apple is on track to purchase well over 100 million advanced chips.
We're accelerating our long-standing support for U.S. innovation, we're also investing in America's workforce. We're looking forward to opening the doors to an all-new advanced manufacturing center in Houston later this year, which will provide hands-on training led by Apple experts and tailor-made for students, supplier employees, and American businesses. Whether around the world or in our own backyard, we're proud of the difference Apple has made to enrich lives and support the communities we serve. Looking ahead, we're delighted to welcome developers back to Apple Park for WWDC 2026. We can't wait to share what we've been working on, from AI advancements to exciting new software and developer tools. It's going to be an incredible week. As always, we remain in relentless pursuit of even more powerful innovations guided by our North Star, our users.
As we celebrated 50 years of Apple, we are even more excited and more optimistic about the next 50 years and beyond. With that, I'll turn it over to Kevan.

=== SECONDARY SOURCE: PRESS COVERAGE ===
Source Name: Fool
Published At: 2026-08-04 01:30:00
Article Title: Apple Just Reported Earnings. With Tim Cook's Era Ending, Is the Stock a Buy for the Next Decade?
Article Description: Tim Cook left on a high note, but John Ternus might be facing challenges.

Source Name: Google News
Published At: 2026-08-04 01:03:31
Article Title: iPhone 18 Pro price hike higher than expected - HardwareZone

BACKGROUND BRIEFING:
Apple reported fiscal Q3 2026 results with record June-quarter revenue ($109.4B, up 16% YoY), EPS ($2.02, up 29%), gross margin (50.1%), $0.27 dividend.
Tim Cook's final earnings call as Apple CEO before turning over to John Ternus on Sept 1.

=== ENVIRONMENT: MACRO RISK ===
CURRENT MACRO RISK ALERTS
Incident disrupts traffic in Austin, Texas - Closed
Runway closure planned at Bangor International Airport in Maine
Injuries reported following fire at Astor Place station, New York City
Uptick in cyclosporiasis cases recorded in Indiana, other states`,
    "length_chars": 50055
  },
  "sentiment": {
    "overall": {
      "positive_count": 56,
      "negative_count": 13,
      "total_words": 8748,
      "density": 2.7737,
      "label": "positive"
    },
    "by_role": [
      {
        "role_group": "Analyst",
        "sentiment_density": -0.0006
      },
      {
        "role_group": "Company",
        "sentiment_density": 0.0335
      }
    ],
    "most_positive_speakers": [
      {
        "speaker": "Tim Cook",
        "sentiment_density": 0.0513
      },
      {
        "speaker": "Kevan Parekh",
        "sentiment_density": 0.0344
      },
      {
        "speaker": "John Ternus",
        "sentiment_density": 0.0296
      }
    ],
    "most_negative_speakers": [
      {
        "speaker": "Ben Reitzes",
        "sentiment_density": -0.0178
      },
      {
        "speaker": "Samik Chatterjee",
        "sentiment_density": -0.0056
      },
      {
        "speaker": "Erik Woodring",
        "sentiment_density": -0.005
      }
    ]
  },
  "extraction": {
    "companies_mentioned": [
      "451 Research", "Bank of America", "Evercore", "Freshworks", "Goldman Sachs", 
      "Google", "IDC", "JP Morgan", "Marsh", "Melius Research", "Microsoft", 
      "Morgan Stanley", "Perplexity", "TSMC", "UBS", "Wells Fargo", "Worldpanel"
    ],
    "executives": [
      { "name": "Suhasini Chandramouli", "role": "Director of Investor Relations" },
      { "name": "Tim Cook", "role": "Apple CEO" },
      { "name": "John Ternus", "role": "Incoming CEO / Executive" },
      { "name": "Kevan Parekh", "role": "CFO" },
      { "name": "Erik Woodring", "role": "Analyst at Morgan Stanley" },
      { "name": "Ben Reitzes", "role": "Analyst at Melius Research" },
      { "name": "Michael Ng", "role": "Analyst at Goldman Sachs" },
      { "name": "Wamsi Mohan", "role": "Analyst at Bank of America" },
      { "name": "Amit Daryanani", "role": "Analyst at Evercore" },
      { "name": "David Vogt", "role": "Analyst at UBS" },
      { "name": "Samik Chatterjee", "role": "Analyst at JP Morgan" },
      { "name": "Aaron Rakers", "role": "Analyst at Wells Fargo" }
    ],
    "products_and_segments": [
      "iPhone", "iPhone 17 family", "iPhone 17e", "iPhone 17 Pro Max", "iPhone Air",
      "Mac", "MacBook Neo", "Mac mini", "Mac Studio", "MacBook Air M5", "MacBook Pro M5",
      "iPad", "iPad Air M4", "iPad Pro M5", "Wearables", "Apple Watch Ultra 3",
      "AirPods Max 2", "AirPods Pro 3", "Services ($31B)", "Apple TV", "Apple Intelligence"
    ],
    "financial_figures": [
      { "speaker": "Tim Cook", "role_group": "Company", "figure": "$111.2 billion", "metric": "Total Revenue (Q2 Record, +17% YoY)" },
      { "speaker": "Tim Cook", "role_group": "Company", "figure": "$57 billion", "metric": "iPhone Revenue (+22% YoY)" },
      { "speaker": "Tim Cook", "role_group": "Company", "figure": "$31 billion", "metric": "Services Revenue (+16% YoY, All-time record)" },
      { "speaker": "Tim Cook", "role_group": "Company", "figure": "$2.01", "metric": "Diluted EPS (+22% YoY)" },
      { "speaker": "Tim Cook", "role_group": "Company", "figure": "$8.4 billion", "metric": "Mac Revenue (+6% YoY)" },
      { "speaker": "Tim Cook", "role_group": "Company", "figure": "$6.9 billion", "metric": "iPad Revenue (+8% YoY)" },
      { "speaker": "Tim Cook", "role_group": "Company", "figure": "$7.9 billion", "metric": "Wearables, Home & Accessories (+5% YoY)" },
      { "speaker": "Kevan Parekh", "role_group": "Company", "figure": "49.3%", "metric": "Company Gross Margin" },
      { "speaker": "Kevan Parekh", "role_group": "Company", "figure": "$28.7 billion", "metric": "Operating Cash Flow" },
      { "speaker": "Kevan Parekh", "role_group": "Company", "figure": "$147 billion", "metric": "Cash & Marketable Securities" },
      { "speaker": "Kevan Parekh", "role_group": "Company", "figure": "$100 billion", "metric": "New Share Repurchase Authorization" },
      { "speaker": "Kevan Parekh", "role_group": "Company", "figure": "14%-17%", "metric": "June Quarter Revenue Growth Outlook (YoY)" },
      { "speaker": "Kevan Parekh", "role_group": "Company", "figure": "47.5% - 48.5%", "metric": "June Quarter Gross Margin Outlook" }
    ],
    "forward_looking_statements": [
      {
        "speaker": "Tim Cook",
        "statement": "We look forward to bringing a more personalized Siri to users coming this year."
      },
      {
        "speaker": "Tim Cook",
        "statement": "Mac mini production is coming to America later this year"
      },
      {
        "speaker": "Tim Cook",
        "statement": "Apple is on track to purchase well over 100 million advanced chips"
      },
      {
        "speaker": "Kevan Parekh",
        "statement": "We expect our June quarter total company revenue to grow by 14%-17% year-over-year, which comprehends our best view of constrained supply."
      },
      {
        "speaker": "Kevan Parekh",
        "statement": "We expect gross margin to be between 47.5% and 48.5%"
      },
      {
        "speaker": "Tim Cook",
        "statement": "beyond the June quarter, we believe memory costs will drive an increasing impact on our business"
      },
      {
        "speaker": "Tim Cook",
        "statement": "looking forward, that the Mac mini and the Mac Studio may take several months to reach supply-demand balance"
      }
    ]
  }
};
