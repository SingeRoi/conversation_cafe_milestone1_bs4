
# Conversation Café Website
Milestone One Project: User-Centric Frontend Development - Code Institute - Robert Jackson

This is a responsive mobile-first website for a imaginary local English language self-study group. The client needs are based upon my experience of work with several such voluntary groups in the UK. The site provides a first point of contact for non-native English speakers and seeks to be intuitive and easy to use for those with limited English. The project makes use of audio-visual and other online study materials to assist learners outside of the café. The site presents the Café to prospective learners, volunteers, donors/funding agencies and the community and provides a link to an online giving portal, location map and a contact form. To improve accessibility in addition to English the site is provided in several other major languages.


## Wireframes

The project wireframes and initial strategy analysis are provided
  +  [Strategy](wireframes/strategy.jpg)
  +  [Landing section](wireframes/landing_wireframe.jpg)
  +  [About section](wireframes/about_wireframe.jpg)
  +  [Learn section](wireframes/learn_wireframe.jpg)
  +  [Support section](wireframes/support_wireframe.jpg)
  +  [Contact section](wireframes/contact_wireframe.jpg)

## UX
As the largest group of intended users of the site may have limited English and/or different cultural experience of technology a major goal in the design was to make it easy to access information on the site while keeping things simple and inviting. The colours of the speech bubbles and clothing in the background images are revisited throughout to give a warm, welcoming and professional feel. The warm feel is important to English learners as ['Warm colours, large text and simple navigation are attractive to users of online ESL materials'](https://www.researchgate.net/publication/228375221_Designing_websites_for_ESL_learners_A_usability_testing_study). The English language used is simple and chosen to be understood by learners (approximately grade 6-7).

The primary aim of a website like this is to raise awareness and promote participation in a vital community resource meaning that it must immediately communicate the purpose(s) of the site and of the group it promotes to a range of users. It has to overcome language and cultural barriers to offer simple clear messages to new visitors with limited English. To be able to show them what is on offer and attract them to interact further online and in person. I also felt it was important that the site should provide reasons to continue visiting it. This is addressed by the inclusion of online teaching materials suitable for the wide range of learners who would make use of the café. The site is an advert to attract new volunteers and to encourage donations of cash, refreshments or educational items. Therefore there is a clearly labelled support section indicating how they may help and providing call to action via icon buttons.  The ethos of the group and site is empowering and this needs to be nudged to all users for example by diversity in images and text choice eg affirmatory 'I speak/Je parle/Hablo' in navbar. Another small but vital user group come from elsewhere in the voluntary sector including potential collaborators; referrers and funders so it is important that the site showcases the activities; ethos, professionalism and enthusiasm of the group to them immediately.  The site provides potential links to contact methods most commonly used by the community it serves, where free mobile messaging services such as WeChat and WhatsApp dominate. It also provides access to a respected donation and fundraising site and provides a map and contact form to encourage interaction online and in person. The Contact form itself uses English terms 'Name', 'Email' 'Phone' and 'Message' I feel these are understood by most users through prior experience see [discussion](https://ux.stackexchange.com/questions/59913/best-interaction-layout-for-contact-forms-when-users-are-esl).

Users include low income groups who would access the site via older mobile devices or public PC's as well as others such as students or funding agencies using higher specification devices. Therefore the focus was on making the site as responsive as possible. Wherever possible I wanted to enable the user to access content intuitively and with out leaving the page, hence the use of a modal quiz for example.


## Technologies

1. [HTML5](https://en.wikipedia.org/wiki/HTML5)
      HTML5 is a software solution stack that defines the properties and behaviours of web page content
2. [CSS3](http://www.css3.info/)
      Cascading Style Sheets (CSS) is a style sheet language used for describing the look and formatting of a document written in a markup
3. [Bootstrap (4.3.1)](https://getbootstrap.com/docs/4.3/getting-started/download/)
      Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development - provides new functions and can be accessed via CDN rather than using a library

## Features

Features present:

  -  Speech bubble title on the 'Landing page' provides a visual connection to the image used as background working together to indicate the purpose of the Café - consistent responsive appearance uses a media query
  -  Parallax scrolling of sections to provide a contemporary and professional feel whilst allowing simple navigation to all parts of the site. Scrolling is effected by use of the CSS Smooth-scroll attribute
  -  The navbar stays collapsed regardless of the screen size to promote a minimalist design
  -  Learning material video and audio elements can be played directly on the page without browsing away
  -  A pure CSS and HTML5 crossword is provided as part of the learning materials illustrating use of CSS Grid layout
  -  A [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) quiz is presented as a modal allowing completion without navigation away from the page
  -  A simple contact form is provided coupled with a warning modal informing users about the status of data collection and privacy

### Features Left to Implement
In the near future, I would like to effect slower scrolling but neither the JavaScript used by Haley Schafer on the site I was inspired by nor any others that I have tried have worked with my code thus it may need a custom script or further trial. The scrollSpy delay JavaScript function was replaced by that [at bootsnipp](https://bootsnipp.com/snippets/6Xg2d) amongst others but without effect on scroll speed.

I would like also to improve the responsiveness of the crossword, perhaps to implement it in a modal.

An appropriate privacy policy needs to be written and uploaded - the café would want this to be done in open consultation with users.

## Testing
The  experiences expected for different users (learners, volunteers, other voluntary groups, funding agencies) were tested and found to achieve their aims. The site is friendly and welcoming to users reflecting the inclusive nature of the site owner's self-help group.  Users with little English are able to read simple text descriptions and to navigate the site by use of a dropdown or by simple scrolling. The 'Landing Page' allows all users including those with little English to immediately navigate to the site in 3 other major languages, French; Spanish and Simplified Mandarin. Alternatively a dropdown allows users to find the content most useful to them. For those unfamiliar with dropdowns these sections are all part of a single page allowing users to simply scroll to them.

  - [About](https://singeroi.github.io/conversation_cafe_milestone1_bs4/index.html#about)
          Provides a simple explanation of the ethos and activities of the café
  - [Learning](https://singeroi.github.io/conversation_cafe_milestone1_bs4/index.html#learn)
          Provides a range of learning materials to suit different needs. The majority function in page so that users don't need to leave the Café page. All learning content is presented in English.
  - [Support Us](https://singeroi.github.io/conversation_cafe_milestone1_bs4/index.html#support)
          Provides easy descriptions and immediately available links to encourage visitors to contact and support the group.
  - [Contact](https://singeroi.github.io/conversation_cafe_milestone1_bs4/index.html#contact)
          Invites users to get in touch with the Café immediately - Footer buttons provide further links to appropriate social media and to a location map.

The site clearly outlines the volunteer and non-profit nature of the café fulfilling needs of the site owner to inform users and funding agencies. Though images and styling are warm the parallax scrolling minimised navigation and use of modals give it a professional feel and give the group presence. The 'Support' section allows the wider community to engage and assist the Café by donations of time, refreshments or money, the latter redirects to an ethical giving site suitable for receipt of donations as well as pursuit of matching funds and grant awards. The site provides easy to find information on the time and location of the café as well as a contact form and links to other forms of communication (WhatsApp/WeChat) preferred the community  of users. To assist non-native English users the site is provided in four major international languages English, French, Spanish and Chinese which are accessible as first or second languages to many of the user community.

### Test protocols

Landing page:
1.  Open website verify landing page is visible
2.  Verify title is of appropriate size for device
3.  Scroll down and check whether parallax scroll behaviour is present or not
4.  Hover over navbar icons and verify responses
5.  Click 'I speak' button/'burger' icon and verify appropriate dropdown appears

  Language navigation
  1.  Click to summon 'Language' dropdown
  2.  Hover over dropdown and verify responses
  3.  Click on language button and verify response
  4.  Repeat process with each button

  Section navigation
  1.  Click 'burger' icon to summon 'Section' dropdown
  2.  Hover over dropdown and verify responses
  3.  Click on 'section' button and verify scroll response
  4.  Repeat process with each button

About:

1.  Go to the "About" section
2.  Verify speech bubbles are hidden/visible as appropriate for device
3.  Scroll down and check whether parallax scroll behaviour is present

Learn:

1.  Go to the "Learn" section
2.  Hover over card and verify response
3.  Click on media play/pause, if present, verify content play's pauses successfully
4.  Hover over link icons and verify response.
5.  Click icon and verify appropriate response
6.  Scroll down and check whether parallax scroll behaviour is present or not

Learn cards:

  1.  Go to the "Learn" section
  2.  Hover over card and verify response
  3.  Click on media play/pause, if present, verify content play's pauses successfully
  4.  Hover over link icons and verify response.
  5.  Click icon and verify appropriate response

  Quiz modal:

    1.  Go to the "Learn" section
    2.  Click quiz '?' icon and verify modal opens - check all sections present
    3.  Click answer verify response occurs
    4.  Click check-answer button verify response occurs
    5.  Click next question verify response occurs
    6.  Continue until end of quiz click to verify result
    7.  Click close button verify that quiz modal closes
    8.  Reopen quiz modal
    9.  Click close 'x' verify that quiz modal closes

  Crossword:

    1.  Go to the "Learn" section
    2.  Click on 'pencil' icon and verify crossword opens in new window - check grid and clues present
    3.  Click on letter square and verify change to yellow
    4.  Enter letter verify appropriate response occurs
    5.  Enter complete word check that colour changes for whole word
    6.  Click 'check for validity' verify correct colour change occurs
    7.  Complete crossword verify response

Support cards:

  1.  Go to the "Support" section
  2.  Hover over card and verify response
  3.  Click on media play/pause, if present, verify content play's pauses successfully
  4.  Hover over link icons and verify response.
  5.  Click icon and verify appropriate response

Contact form:

  1.  Go to the "Contact Us" section
  2.  Try to submit the empty form and verify that an error message about the required fields appears
  3.  Try to submit the form with an invalid email address and verify that a relevant error message appears
  4.  Try to submit the form with all inputs valid and verify that a success message appears
  5.  Press send and verify that contact form modal opens
  6.  Check that pressing close button closes modal

Footer buttons

  1.  Scroll to "Footer"
  2.  hover over icon check it responds by changing colours
  3.  click on icon and verify that it opens appropriate link

### Test Findings
The landing page has a similar look and simple feel whatever screen size is used, incorporating the long word 'Conversation' comfortably is achieved by use of alternative speech bubbles with different heading sizes determined by a media query.

By clicking on the navbar the links allow navigation to other Language indexes or page sections regardless of the order they are listed or being used.

Media are embedded in the site and can be played directly by pressing a play button (Soundcloud) or by right clicking on the video. This minimises the need to open other windows on a mobile device and means that learners can receive the full experience without navigating away. It is also possible to open each media in a new tab by clicking on the desktop icon. The quiz for the 'Half a million secrets' is executed as a modal and can be completed without leaving the Café site. Song lyrics are provided as links to pdf files and will download to your default folder for downloads on click using the 'download' attribute. The crossword is executed from a separate index and stylesheet to allow inclusion of new material it opens in a new tab when clicked. All links have been manually tested to ensure that they are pointing to the correct destination.

This site was tested across multiple browsers (Chrome, Safari, Internet Explorer, FireFox) and on multiple mobile devices (iPhones 5,6-8,X;  iPad and iPad-pro, Chrome and Safari; pixel2+pixel2XL, Galaxy S9, One+5, Macbook, Asus and Jumper laptops; Chrome/Safari/Firefox) to ensure compatibility and responsiveness. A range of other devices were simulated using [Responsive DesignChecker.](https://responsivedesignchecker.com) and [The Responsinator](https://www.responsinator.com/)
As a result of these tests:
 - I found there was no video play option using Chrome this was fixed by specifically introducing 'control'  and  then restyling the video position by adjusting padding.

 - I found that Learn/Support cards sat to the right on iPhone6/7/8/X on both Chrome &/Firefox simulations
 - I also found that cards were slightly to right on pixel2XL in Chrome simulations.
 - To correct these issues I removed an 80%container width media query previously applying.
 - Further adjustments to styling were made to adjust positioning on small devices

 - I also improved card alignment on iphone XL with a solution from [here]
 (https://stackoverflow.com/questions/6072154/html-css-wrapper-is-not-center-aligned-in-iphone-safari)

Further iterative testing using these sites revealed other styling issues resolved by small edits or introduction of media queries to produce a better UX through responsive design;

### Peer Review
The first deployed site was shared on slack #peer-code-review and I'm very grateful to [Alicja Malinkowska](https://app.slack.com/team/UML1GUKHU) for helpful comments. As a result of these I;
  - changed all section widths to 100% and introduced overflow-x:hidden; in sections where horizontal overflow was occurring.
  - revised the broken contact section to use flex properties to place the contact form on the right on large displays whist using a media query to make it sit inline vertically on small devices
  - changed transparency of text color in About, on small displays, and in Footer
  - set a constant height for p elements in learning cards to give a consistent relationship to icon buttons
  - changed transparency of background-color and changed color to #fff for learn and support icons
  - changed color for footer text to #fff


### Outstanding issues:
 - icon buttons left align instead of to the centre on iOS Safari on a real iPhone5 - however this is not seen in simulations of this model on browser developer tools or responsiveness testing websites.  
 - that the modal quiz content does not run on some old models of the iPad.


## Deployment
This site is hosted using GitHub pages, deployed directly from the master branch. The deployed site will update automatically upon new commits to the master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named `index.html`.

To run locally, you can clone this repository directly into the editor of your choice by pasting `git clone [https://singeroi.github.io/conversation_cafe_milestone1_bs4/](https://singeroi.github.io/conversation_cafe_milestone1_bs4/)` into your terminal. To cut ties with this GitHub repository, type `git remote rm origin` into the terminal.


## Credits

### Content
All styling and content in the "Landing", "About Us", "Support" and "Footer" sections of the site were designed and written by me, I also composed the content of titles and subtitles as well as the quiz and crossword in the "Learn" section. The overall structure ov the site and specific components in the 'Contact' section, warning modal and Readme use text from  [Haley Shafer's portfolio project](https://github.com/Code-Institute-Solutions/StudentExampleProjectGradeFive). Translations into French, Spanish and Chinese were all performed by myself with assistance from [Google Translate](https://translate.google.com) I am extremely grateful to Qijing Yu for proofreading the Chinese.

### Media
All photos were taken from [Pexels](https://www.pexels.com/), a stock image library. Audio links for "Learn with a Song" learning materials are embedded from [Soundcloud](https://www.soundcloud.com) an open audio platform, lyrics were taken from the internet with appropriate attribution.  The TED talk video extracts have been generously provided to me by METEN as material for educational use only. The location map for The Poly was taken from [a Google search](https://www.google.com/maps/place/The+Poly/@50.1537526,-5.0681146,15z/data=!4m5!3m4!1s0x0:0x5009de3c8e65c7fe!8m2!3d50.1537526!4d-5.0681146). Other learning material links take users to free educational material at
[Duolingo ](https://tinycards.duolingo.com/decks/GAXRgJ/english-words?lesson=0) and [The British Council](https://learnenglishteens.britishcouncil.org/content).

### Acknowledgements

 - The inspiration for the parallax scrolling site came from the Milestone 1 portfolio site by [Haley Shafer](https://www.haleyschafer.com/). This has been substantially   modified to use Bootstrap 4.3.1 as well as to introduce almost  entirely new content.
 - The speech bubbles used in the site are modified from those described by [Auralinna](https://auralinna.blog/post/2017/how-to-make-a-css-speech-bubble-with-borders-and-drop-shadow) to make their appearance more streamlined and to suit the overall site style.
 - The modal quiz was devloped from that of  [Bobby Black](https://github.com/BobbyBLACK/JavaScript_QUIZ/blob/master/quiz.html). The content is entirely new and the styling was modified to make it fit this site as a modal popup.
 - The pure HTML and CSS crossword associated with the 'Forget Fashion' card was inspired and modified from that of Adrian Roworth available [here](https://codepen.io/adrianroworth/pen/OpeyZq) it illustrates use of the CSS Grid layout as explained by [Adrian Roworth](https://www.sitepoint.com/how-built-pure-css-crossword-puzzle/).
 - The concept of parallax scrolling is demonstrated at
   [w3schools](https://www.w3schools.com/howto/howto_css_parallax.asp)
 - I am very grateful to my mentor Antonio Rodriguez [Antonio Rodriguez](https://github.com/AkaAnto) for pointing out some failures in styling which I have since fixed.

## Future Versions

 - The addition of a "what's on this week" section for current
   announcements would be a desirable feature.  

 - Regular updating of learner content to include video/audio material generated by the café learners with addition of a separate page for a content archive to allow users to search for older materials.


## On Reflection

The process of this project taught me several things including that my time for coding is very limited, that my ambitions in design aspiration and ability were unrealistic and that my early estimates of feasibility were poor. I have tried to take a more pragmatic approach to completing this project and intend to set strict deadlines in future.
I did, however, find I could use [GitHub](https://github.com/) that I like [Atom](https://atom.io) as an IDE and that migrating IDE mid-project sucks.

**This is for educational use.**

> Written with [StackEdit](https://stackedit.io/).
