@startuml
title Cooperate with other teams\n(Ideas, Features, Bug)
|External team|
start
note
Let's say each team has 2 boards
1st External Board is for outsiders to work with the team
2nd Internal Board is for internal teams to work on
----
🤔 Should replace tags by board columns?
| Idea | Proposal | Proposing | Approved | Active | Done |
end note
-> [External Board];
if(Is it a bug?) then (yes)
	:Create a bug card;
else (no)
	:Create an issue card;
endif
:Add informations;
note: Including relevant data such as wireframe,\nworkflow, platform, approximate time, etc

|Internal team|
:Assign owner;
note right: Do it at free time or at least at the end of the day.\nIf it is a bug card,the card owner must estimate the\nemergency level of it and notify in the next dev meeting
repeat :Make an appointment;
:Discussion meeting;
note: All conclusions should\nbe recorded in the card
backward:Tagging the card with **need:fix** tag which means\nrequired the external team add more confidential\ninformation,graphics, etc. When the card is ready\nto review again then change the tag to **need:review**\n----\nIn case the card need pilot work, We'll create a new\nissue and refer back to the originating issue and\ntagging **need:pilot** tag at the originating issue;
repeat while (Get an agreement?) is ([Postpone])
-> [Approved];
:Tagging the card with **approved** tag;
note right: It's mean the card is ready for development.\nIt must including detail, wireframes, nice graphics and assets
' -> [Internal Board];
' :Create new card from the issue;
' note right#orange: 🤔 What it should be a Story? a Feature? a Bug?\n Right now I think it shoule be a **Feature card**\nexcept for bug cards, it should be a Story card.
stop

|External team|
start
-> [Want to conbitube];
:Let the owner know about you want to work on that card;
note right: You have to discuss your\nsolution with the owner to\nget a permission
|Internal team|
-> [Accepted];
' group The card required dev environment
	:Provide related documents into the bug card such as
	instruction guideline, How to setup a dev environment;
	' note right: The owner must discuss with the internal team to\ndedicate a development environment for the contributor
' end group
:Tagging the card with **active** tag;
|External team|
split
	-> [Document & Wiki];
	:Fork;
	:Update or Create documents\nby following the instruction\nguideline;
	(1)
	:Create a Pull Request;
	note right: Refer the\nissue Id
	:Review process|
	' repeat :Review & Discussion;
	' backward: Fix;
	' note right: Tagging it with **need:fix** tag, until\nit ready to review agin then change\nthe tag to **need:review**
	' repeat while(Get an approvement?) is (No)
	-> [Approved];
	|Internal team|
	:Complete the PR;
split again
	|External team|
	-> [Bug];
	:Fork;
	:Setup development environment\nby following the setup document;
	:Fix bug;
	(1)
	' :Create a Pull Request;
	' :Review process|
	' -> [Approved];
	detach
	' |Internal team|
	' :Complete the PR;
split again
	|External team|
	-> [Pilot];
	:Create & implement\non their own project;
	-> Ready for review;
	:Update the result and experiment project's link\non the issue card. Also tagging the card with\n**need:review** tag;
	group Review process
		|Internal team|
		repeat :Make an appointment;
		:Discussion meeting;
		backward: Fix;
		repeat while(Get an approvement?) is ([Postpone])
	end group
	-> [Approved];
	:Replace **need:pilot** tag with **need:review**\nat the originating issue card;
end split
|Internal team|
:Complete the card;

stop

@enduml
