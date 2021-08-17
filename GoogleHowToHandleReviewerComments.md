# How to handle reviewer comments
> TLDR
> * Talk with reason, not emotionally
> * If reviewers don't understand something in your code then clarify the code or add a code comment to explains it
> * Think for Yourself

When you’ve sent a CL out for review, it’s likely that your reviewer will respond with several comments on your CL. Here are some useful things to know about handling reviewer comments.

## Don’t Take it Personally
Sometimes reviewers feel frustrated and they express that frustration in their comments. This isn’t a good practice for reviewers, but as a developer you should be prepared for this. Ask yourself, **“What is the constructive thing that the reviewer is trying to communicate to me?”** and then operate as though that’s what they actually said.

> **Never respond in anger to code review comments.** That is a serious breach of professional etiquette that will live forever in the code review tool. If you are too angry or annoyed to respond kindly, then walk away from your computer for a while, or work on something else until you feel calm enough to reply politely.

## Fix the Code
If a reviewer didn’t understand some piece of your code, it’s likely other future readers of the code won’t understand either. Writing a response in the code review tool doesn’t help future code readers, but clarifying your code or adding code comments does help them.
> Your first response should be to clarify the code itself. If the code can’t be clarified, add a code comment that explains why the code is there

## Think for Yourself
No matter how certain you are, your first question to yourself should always be, **“Is the reviewer correct?”**

If you can’t answer that question, it’s likely the reviewer needs to clarify their comments.

If you have considered it and you still think you’re right, feel free to respond with an explanation of why your method of doing things is better for the codebase

> Often, reviewers are actually providing suggestions and they want you to think for yourself about what’s best. You might actually know something about the users, codebase, or CL that the reviewer doesn’t know. So fill them in; give them more context. Usually you can come to some consensus between yourself and the reviewer based on technical facts.
