# Microsoft API Review Process

![img](https://user-images.githubusercontent.com/34246760/66542496-95052c80-eae7-11e9-9c7c-549b82a8d492.png)

## Process
1. Issue owner identifies for his/her issue will need an API change or addition
2. Mark those issues with the `api-suggestion` label
3. When the issuer owner thinks it is ready for review, he/she marks the issue with `api-ready-for-review` label. (@api-reviews team should be notified on the issue)
4. @api-review team will host a weekly API review meeting and will review your proposed API change during the next meeting. If you have an API scheduled for review, you must have a representative in the meeting
5. When your PR gets approved, they will mark `api-approved` label
6. The owner of the issue is now free to work on the implementation of the proposed API

## Meeting
* In case during implementation changes to the original proposal are required, the review should become obsolete and the process should start from the beginning
* Larger changes should have more explanation and context provided, and small changes need less explanation. [Sample of explanation](https://github.com/dotnet/aspnetcore/issues/17160)
* The meeting invite is sent out to all the team members to join
* Every API review meeting should include the [area owners](https://github.com/dotnet/runtime/blob/main/docs/area-owners.md) of the API change proposals as mandatory attendees

## Why Microsoft do that?
* Putting this information in an issue with all of the context makes it possible for discussion to take place before the api-review meeting
* Online enables remote work as well as our community to give feedback on designs as well
* They want to provide enough context for people *working outside that feature area* to understand what the change is about and give meaningful feedback

## "champion" for a community-submitted change
If you are assigned a community-submitted change to champion in our API-review then just put on your pretend pajamas and pretend that it was your change to begin with. Come to the meeting ready to explain why this addition is needed, and why it's the best approach. 😘
