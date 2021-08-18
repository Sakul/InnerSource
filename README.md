# InnerSource

## InnerSource
1. [What's InnerSource?](/InnerSource.md)
1. [Summary of TC](/Brief%20of%20TC.md)

## Open source
1. [How to work with open source project?](/OpensourceWorkflows.md)
1. [Opensource Guides](/OpensourceGuide.md)

---
# Contribution workflows

## Microsoft Guidelines
![img](/Diagrams/ContributionWorkflow.png)
1. [Contribution workflow](/MSContributionWorkflow.md)
1. [API review process](/MSApiReviewProcess.md)
1. [Triage process](/MSTriageProcess.md)
1. [Pull request guide](/MSPullRequestGuide.md)

## Google's Engineering Practices documentation
![img](/Diagrams/Google%20Engineering%20Practices.png)
1. [Writing good CL descriptions](/GoogleWritingGoodCLDescriptions.md)
1. [Speed of Code Reviews](/GoogleSpeedOfCodeReviews.md)
1. [How to Write Code Review Comments](/GoogleHowToWriteCodeReviewComments.md)
1. [Handling Pushback in Code Reviews](/GoogleHandlingPushbackInCodeReviews.md)
1. [How to handle reviewer comments](/GoogleHowToHandleReviewerComments.md)

> **Terminology**  
> PR: Stands for “pull-request”  
> CL: Stands for “changelist”, which means one self-contained change that has been submitted to version control or which is undergoing code review. Other organizations often call this a “change”, “patch”, or “pull-request”.

## GitHub flow
![img](/Diagrams/GitHubFlow.png)

---

## Code Review
* **Improve code quality** by identifying and removing defects before they can be introduced into shared code branches
* Grow by learning from each other about unfamiliar design patterns or languages among other topics, and even break some bad habits
Develop a shared understanding of the project's code

### Tools
#### Visual Studio Code
* [GitHub](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)
* [Azure DevOps](https://marketplace.visualstudio.com/items?itemName=ankitbko.vscode-pull-request-azdo)
#### Visual Studio
* [GitHub](https://marketplace.visualstudio.com/items?itemName=GitHub.GitHubExtensionforVisualStudio)
* [Azure DevOps](https://marketplace.visualstudio.com/items?itemName=VSIDEVersionControlMSFT.pr4vs)

---

# Resolve Merge Conflicts
![img](/Diagrams/ResolveMergeConflicts.png)  
When merge conflicts occur follow the steps below.
1. Create a remote `hotfix` branch from **main**
1. Merge the local `development` branch into the local **hotfix** branch
1. Resolve the merge conflicts and commit it
1. Sync the local **hotfix** branch to the remote repository
1. Merge the **hotfix** branch into the **main** branch

---

## ⏳ Inprogress
1. [Microsoft Engineering guidelines](https://github.com/dotnet/aspnetcore/wiki/Engineering-guidelines)
1. [Adopting InnerSource - Principles and Case Studies](https://innersourcecommons.org/documents/books/AdoptingInnerSource.pdf)
1. [InnerSource Patterns](https://patterns.innersourcecommons.org)

## Helpful labels
|Label|Meaning|Sample|
|--|--|--|
|up-for-grabs|Place to start if you are interested in contributing|[Sample](https://aka.ms/aspnet/helpwanted)|
|help-wanted|PRs targeting areas which team didn't plan to expand further at the time (ASP.NET Core only)|[Sample](https://github.com/dotnet/runtime/labels/up-for-grabs)|
|good-first-issue|Not require too much familiarity with the framework and are more novice-friendly|[Sample](https://aka.ms/aspnet/helpwanted)|
|Resolution: Duplicate|Resolved as a duplicate of another issue (The issue will be automatically closed in 1 day of inactivity)|[Sample](https://github.com/dotnet/aspnetcore/labels?q=Resolution)|
|Resolution: Answered|Resolved because the question asked by the original author has been answered (The issue will be automatically closed in 1 day of inactivity)|[Sample](https://github.com/dotnet/aspnetcore/labels?q=Resolution)|

## References
* [InnerSource Checklist - How to Launch Collaboration Within Your Enterprise](https://innersourcecommons.org/documents/books/InnerSourceChecklist.pdf)
* [Youtube - How to Start Contributing To Open-Source](https://www.youtube.com/watch?v=wF9IUQlZ2Sk)
* [opensource guide](https://opensource.guide)
* [.NET Runtime - Pull Request Guide](https://github.com/dotnet/runtime/blob/main/docs/pr-guide.md)
* [.NET Runtime - Contributing](https://github.com/dotnet/runtime/blob/main/CONTRIBUTING.md)
* [ASP.NET Core - Contributing](https://github.com/dotnet/aspnetcore/blob/main/CONTRIBUTING.md)
* [ASP.NET Core - API review process](https://github.com/dotnet/aspnetcore/blob/main/docs/APIReviewProcess.md)
* [ASP.NET Core - Contributor documentation](https://github.com/dotnet/aspnetcore/blob/main/docs/README.md)
* [ASP.NET Core - Triage Process](https://github.com/dotnet/aspnetcore/blob/main/docs/TriageProcess.md)
* [Google's Engineering Practices documentation](https://google.github.io/eng-practices)
* [Understanding the GitHub flow](https://guides.github.com/introduction/flow)
* [Resolve Merge Conflicts in Azure DevOps](http://twocents.nl/?p=2648)

## Useful links
* [gitgraph.js](https://www.npmjs.com/package/@gitgraph/js)
