# Writing good CL descriptions
It is a public record of `what` change is being made and `why` it was made

> TLDR
> * First line should be short, focused, and stand alone
> * Description body should include informative details that help reviewers and future code searchers understand each CL’s effect.

## First Line
* Short summary of what is being done (specifically `What` is being done)
* Complete sentence, written as though it was an order.
* Follow by empty line.

### **Example**  
Delete the FizzBuzz RPC and replace it with the new system

## Body is Informative
It's the rest of the description should fill in the details and include any supplemental information a reader needs to understand the changelist holistically. It might include
* Brief description of the problem that’s being solved
* Why this is the best approach
* Any shortcomings to the approach
* background information such as bug numbers, benchmark results, and links to design documents.

> **Warning**    
> If you include links to external resources consider that they **may not be visible to future** readers due to access restrictions or retention policies. Where possible include enough context for reviewers and future readers to understand the CL.

### Bad CL Descriptions
“Fix bug” is an inadequate CL description. What bug? What did you do to fix it? Other similarly bad descriptions include
* “Fix build.”
* “Add patch.”
* “Moving code from A to B.”
* “Phase 1.”
* “Add convenience functions.”
* “kill weird URLs.”

### Good CL Descriptions
#### Functionality change
> remove size limit on RPC server message freelist.  
> 
> Servers like FizzBuzz have very large messages and would benefit from reuse. Make the freelist larger, and add a goroutine that frees the freelist entries slowly over time, so that idle servers eventually release all freelist entries.

*The first few words describe what the CL actually does. The rest of the description talks about the problem being solved, why this is a good solution, and a bit more information about the specific implementation.*
