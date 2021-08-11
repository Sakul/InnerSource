# Microsoft .NET contribution workflow

1. Create issue
	* Reuse an existing issue on the topic (if there is one upvote 👍)
		* If it not existing, file a new `design proposal` issue, link to the issue you'd like to address and provide detailed information about how you'd like to solve a specific problem
		* Required high-level description of how it will be implemented
	* Get agreement from the team
	* If your change adds a new API, follow [API Review Process](https://github.com/dotnet/runtime/blob/main/docs/project/api-review-process.md)
	* You can request that the issue be assigned to you (The issue filer and the implementer don't have to be the same person)
	* [Good issue sample](https://github.com/dotnet/runtime/issues/15725)
2. Fork
3. Create new branch off of main (with clearly your intentions like `issue-XXX`)
4. Make a commit
	* Follow [Workflow Instructions](https://github.com/dotnet/runtime/blob/main/docs/workflow/README.md) explains how to build and test
	* Follow [Commit Messages](https://github.com/dotnet/runtime/blob/main/CONTRIBUTING.md#commit-messages) guidance
	```
	Summarize change in 50 characters or less

	Provide more detail after the first line. Leave one blank line below the
	summary and wrap all lines at 72 characters or less.

	If the change fixes an issue, leave another blank line after the final
	paragraph and indicate which issue is fixed in the specific format
	below.

	Fix #42
	```
	* Follow [Coding Style - C#](https://github.com/dotnet/runtime/blob/main/docs/coding-guidelines/coding-style.md)
	* File Headers - Please use it for new files [Sample](https://github.com/dotnet/runtime/blob/main/src/libraries/System.Private.CoreLib/src/System/Collections/Generic/List.cs)
	```csharp
	// Licensed to the .NET Foundation under one or more agreements.
	// The .NET Foundation licenses this file to you under the MIT license.
	```
	* DON'T commit code that you didn't write
5. Add new tests corresponding to your change
6. Build & Test (Make sure tests are all passing)
7. Create a pull request (PR)
	* DON'T surprise them with big pull requests
	* State in the description what issue or improvement your change is addressing
	* Check if all the Continuous Integration checks are passing
	* Do not mix unrelated changes in one pull request (a code style change should never be mixed with a bug fix)
8. Wait for feedback or approval
	* [Review procedure](https://github.com/dotnet/runtime/blob/main/docs/pr-guide.md)
	> Maintainers will add an [Area Owner](https://github.com/dotnet/runtime/blob/main/docs/area-owners.md) tag
	* Reviews are streamed live on [YouTube](https://www.youtube.com/playlist?list=PL1rZQsJPBU2S49OQPjupSJF-qeIEz9_ju)
	* After the review, they'll publish the notes in the [API Review repository](https://github.com/dotnet/apireviews)
	* A good example is the review of [immutable collections](https://github.com/dotnet/apireviews/tree/main/2015/01-07-immutable)
9. When area owners have signed off, and all checks are green, your PR will be merged.
	* The next official build will automatically include your change

# PR Feedback
Microsoft team members will review every PR prior to merge. They will often reply with "LGTM, modulo comments". That means that the PR will be merged once the feedback is resolved. (LGTM = "looks good to me")

# Contributor License Agreement
You must sign a [.NET Foundation Contribution License Agreement (CLA)](https://cla.dotnetfoundation.org) before your PR will be merged (one-time requirement)
> A bot will evaluate whether you have signed the CLA. If required, the bot will comment on the pull request, including a link to this system to accept the agreement
