
# Conversation Café Website
Milestone One Project: User-Centric Frontend Development - Code Institute - Robert Jackson

This is a responsive mobile-first website for a imaginary local English language self-study group. The client needs are based upon my experience of work with several such voluntary groups in the UK. The site provides a first point of contact for non-native English speakers and seeks to be intuitive and easy to use for those with limited English. The project makes use of audio-visual and other online study materials to assist learners outside of the café. The site presents the Café to prospective learners, volunteers, donors/funding agencies and the community and provides a link to an online giving portal, location map and a contact form. To improve accessibility in addition to English the site is provided in several other major languages.


## Demo
A live demo maybe be found [here soon](

![Desktop Demo]( "Desktop Demo")


## UX
As the intended users of the site may have limited English and/or different cultural experience of technology a major goal in the design was to make it easy to access information on the site while keeping things simple and inviting. The colours of the speech bubbles and clothing in the background images are revisited throughout to give a warm, welcoming and professional feel.

The primary aim of a website like this is to raise awareness of the existence of a vital community resource meaning that it must immediately communicate the purpose(s) of the site and of the group it promotes. It has to overcome language and cultural barriers to offer simple clear messages to new visitors and be able to attract them to interact further online and in person. I also felt it was important that the site should provide reasons to continue visiting it. This is addressed by the inclusion of online teaching materials suitable for the wide range of learners who would make use of the café. A site such as this is also an advert to attract new volunteers and to encourage donations of cash or other items. Another group of visitors are those from elsewhere in the voluntary sector and from funders so it is important that the site showcases the activities ethos, professionalism and enthusiasm of the group to them.  The site provides potential links to contact methods most commonly used by the community it serves where free mobile messaging services such as WeChat and WhatsApp dominate. It also provides access to respected donation and fundraising site and provides a map and contact form to encourage interaction.

Users include low income groups who would access the site via older mobile devices or public PC's as well as others such as students or funding agencies using higher specification devices. Therefore the focus was on making the site as responsive as possible. Wherever possible I wanted to enable the user to access content intuitively and with out leaving the page, hence the use of a modal quiz for example.


## Technologies
1. HTML
2. CSS
3. Bootstrap (4.3.1)


## Features
Scrolling is effected by use of the CSS Smooth-scroll attribute. The navbar also stays collapsed regardless of the screen size to promote a minimalist design. A Javascript quiz on the Half a Million Secrets card is presented as a modal to allow learners to use it without leaving the page. The pure CSS and HTML crossword associated with the 'Forget Fashion' card illustrates use of the CSS Grid layout as explained by [Adrian Roworth] (https://www.sitepoint.com/how-built-pure-css-crossword-puzzle/).


### Features Left to Implement
In the near future, I would like to effect slower scrolling but neither the JavaScript used by Haley Schafer nor any others that I have tried have worked with my code thus it may need a custom script or further trial.
- The scrollSpy delay JavaScript function was replaced by that  [at bootsnipp](https://bootsnipp.com/snippets/6Xg2d) amongst others but without effect on scroll speed.

 I would like also to improve the responsiveness of the crossword, perhaps to implement it in a modal.


## Testing
The  experiences expected for different users (learners, volunteers, other voluntary groups, funding agencies) were tested and found to achieve their aims. The site is friendly and welcoming to users reflecting the inclusive nature of the site owner's self-help group.  Users with little English are able to read simple text descriptions and to navigate the site by use of a dropdown or by simple scrolling.  [Warm colours, large text and simple navigation are attractive to users of online ESL materials](https://www.researchgate.net/publication/228375221_Designing_websites_for_ESL_learners_A_usability_testing_study). The English language used is chosen to be understood by learners (approximately grade 6-7). The site clearly outlines the volunteer and non-profit nature of the café fulfilling needs of the site owner to inform users and funding agencies. Though images and styling are warm the parallax scrolling minimised navigation and use of modals give it a professional feel and give the group presence. The 'Support' section allows the wider community to engage and assist the Café by donations of time, refreshments or money, the latter redirects to an ethical giving site suitable for receipt of donations as well as pursuit of matching funds and grant awards. The site provides easy to find information on the time and location of the café as well as a contact form and links to other forms of communication (WhatsApp/WeChat) preferred the community  of users. To assist non-native English users the site is provided in four major international languages English, French, Spanish and Chinese which are accessible as first or second languages to many of the user community.

If you try to submit the contact form with an invalid email address, there will be an error noting the invalid email address. Furthermore, the 'required' attribute is added to the 'name,' 'email,' and 'message' fields, so if those fields are not filled in, the form will not submit. If all fields are valid, the page will reload. If an employer or recruiter is interested in contacting me, they will have to fill out all fields in order for the form to go through.

Media are embedded in the site and can be played directly by pressing a play button (Soundcloud) or by right clicking on the video this minimises the need to open other windows on a mobile device and means that learners can receive the full experience without navigating away. It is also possible to open each media in a new tab by clicking on the desktop icon. The quiz for the 'Half a million secrets' is executed as a modal and can be completed without leaving the Café site. Song lyrics are provided as links to pdf files and will download to your default folder for downloads on click using the 'download' attribute. The crossword is executed from a separate index and stylesheet to allow inclusion of new material it opens in a new tab when clicked. All links have been manually tested to ensure that they are pointing to the correct destination.

By clicking on the navbar the links in will work regardless of whether or not you're viewing the sections in the same order they are listed in the dropdown navbar.

This site was tested across multiple browsers (Chrome, Safari, Internet Explorer, FireFox) and on multiple mobile devices (iPhone 4, 5, 7: Chrome and Safari, iPad, One+5) to ensure compatibility and responsiveness. A range of other devices were simulated using [Responsive DesignChecker.](https://responsivedesignchecker.com) and [The Responsinator](https://www.responsinator.com/)
As a result of these tests:
 - I found there was no video play option using Chrome this was fixed by specifically introducing 'control'  and then restyling the video position by adjusting padding.

 - I found that Learn/Support cards sat to the right on iPhone6/7/8/X on both Chrome &/Firefox simulations
 - I also found that cards were slightly to right on pixel2XL in Chrome simulations.
 - To correct these issues I removed an 80%container width media query previously applying.

- I also improved card alignment on iphone XL with a solution from [here]
(https://stackoverflow.com/questions/6072154/html-css-wrapper-is-not-center-aligned-in-iphone-safari)

Further iterative testing using these sites revealed other styling issues resolved by small edits or introduction of media queries to produce a better UE through responsive design;

### Peer Review
The first deployed site was shared on slack #peer-code-review and I'm very grateful to [Alicja Malinkowska](https://app.slack.com/team/UML1GUKHU) for helpful comments. As a result of these I;
  - changed all section widths to 100% and introduced overflow-x:hidden; in sections where horizontal overflow was occurri ng.
  - revised the contact section to use flex properties to place the contact form on the right on large displays whist using a media query to make it sit inline vertically on small devices.
  - changed transparency of text color in About, on small displays, and in Footer
  - set a constant height for p elements in learning cards to give a consistent relationship to icon buttons
  - changed transparency of background-color and changed color to #fff for learn and support icons
  - changed color for footer text to #fff


Two outstanding issues remain that:
 - icon buttons left align instead of to the centre on iOS Safari on a real iPhone5 - however this is not seen in simulations of this model.  
 - that the modal quiz content does not run on some old models of the iPad.


## Deployment
This site is hosted using GitHub pages, deployed directly from the master branch. The deployed site will update automatically upon new commits to the master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named `index.html`.

To run locally, you can clone this repository directly into the editor of your choice by pasting `git clone [https://singeroi.github.io/conversation_cafe_milestone1_bs4/](https://singeroi.github.io/conversation_cafe_milestone1_bs4/)` into your terminal. To cut ties with this GitHub repository, type `git remote rm origin` into the terminal.


## Credits

### Content
All content in the "Landing", "About Us" and "Support" sections of the site were written by me, I also composed the content of titles and subtitles as well as the quiz and crossword in the "Learn" section. The Contact section warning modal uses text from  [Haley Shafer's portfolio project](https://github.com/Code-Institute-Solutions/StudentExampleProjectGradeFive). Translations into French, Spanish and Chinese were all performed by myself with assistance from [Google Translate](https://translate.google.com) I am extremely grateful to Qijing Yu for proofreading the Chinese.

### Media
All photos were taken from [Pexels](https://www.pexels.com/), a stock image library. Audio links for "Learn with a Song" learning materials are embeded from [Soundcloud](https://www.soundcloud.com) an open audio platform, lyrics were taken from the internet with appropriate attribution.  The TED talk video extracts have been generously provided to me by METEN as material for educational use only. The location map for The Poly was taken from [a Google search](https://www.google.com/maps/place/The+Poly/@50.1537526,-5.0681146,15z/data=!4m5!3m4!1s0x0:0x5009de3c8e65c7fe!8m2!3d50.1537526!4d-5.0681146). Other learning material links take users to free educational material at
[Duolingo ](https://tinycards.duolingo.com/decks/GAXRgJ/english-words?lesson=0) and [The British Council](https://learnenglishteens.britishcouncil.org/content).

### Acknowledgements

 - The inspiration for the parallax scrolling site came from the Milestone 1 portfolio site by [Haley Shafer](https://www.haleyschafer.com/). This has been substantially   modified to use Bootstrap 4.3.1 as well as to introduce almost  entirely new content.
 - The speech bubbles used in the site are modified from those described by[Auralinna](https://auralinna.blog/post/2017/how-to-make-a-css-speech-bubble-with-borders-and-drop-shadow) to make their appearance more streamlined and to suit the overall site style.
 - The modal quiz was devloped from that of  [Bobby Black](https://github.com/BobbyBLACK/JavaScript_QUIZ/blob/master/quiz.html). The content is entirely new and the styling was modified to make it fit this site as a modal popup.
 - The pure HTML and CSS crossword was inspired and modified from that of Adrian Roworth available [here](https://codepen.io/adrianroworth/pen/OpeyZq)
 - The concept of parallax scrolling is demonstrated at
   [w3schools](https://www.w3schools.com/howto/howto_css_parallax.asp)
 - I am very grateful to my mentor Antonio Rodriguez [Antonio Rodriguez] (https://github.com/AkaAnto) for pointing out some failures in styling which I have since fixed.

## Future Versions

 - The addition of a "what's on this week" section for current
   announcements would be a desirable feature.  

 - Regular updating of learner content to include video/audio material generated by the café learners with addition of a separate page for a content archive to allow users to search for older materials.

 - An appropriate privacy policy needs to be written and uploaded - the café would want this to be done in open consultation with users.

 - The crossword should be reformatted to make it more responsive.


**This is for educational use.**

> Written with [StackEdit](https://stackedit.io/).
