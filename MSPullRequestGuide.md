# Microsoft .NET Pull Request Guide

## Merging Pull Requests (PR)
* PR required approval by at least one reviewer
* Merge conflict occurs the area owner is responsible for its resolution
* Avoid rebasing your changes during the review process (do them as a new commit)
* PR successfully builds and passes all tests in the Continuous Integration (CI) system
	* You may need to re-run validation. See `Rerunning Validation` section below

## Rerunning Validation
1. Option 1: You have a defect in your PR
	* Simply push the fix to your PR branch
2. Option 2: There is a flaky test that is not related to your PR
	* See failure in CI results
	* Re-run failed checks
	* If it is an unrelated failure, See the `Unrelated Failure` section below
3. Option 3: The state of the main branch HEAD is bad
	* Simply rebase your branch

## What to do if you determine the failure is unrelated
* Add a comment to your issue with
	* a) the link to the build
	* b) the affected configuration (ie net6.0-windows-Release-x64-Windows.81.Amd64.Open)
	* c) all console output including the error message and stack trace from the Azure DevOps tab
	* d) if there's a dump file (see Attachments tab in Azure DevOps) include that
