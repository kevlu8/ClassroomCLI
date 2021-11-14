# ClassroomCLI
CLI for Google Classroom. Runs entirely in cmd, no mingw installation required

# Open Alpha
As pretty much none of the features have been implemented except for the basic CLI, there won't be anything in the Releases page.

However, feel free to go and compile the source code yourself!

Here's the plan:

this is just psuedocode

FUN FACT: the arguments in `int main(int argc, char* argv[], char* envp[])` don't actually have to be argc or argv, they can be anything

IMPORTANT TODO(s):
1. add autocomplete to CLI (tab)
2. lower command input: this way SUBmit will work along with subMIT
3. add "use help" when user uses wrong command

Authenticate/auth
if (!authenticated)
open browser tab using ShellExecuteA, asking for permission for account
else
cout "You are already authenticated!"
^ Make sure to create a file in directory with required information

List/lis
output a list of what is selected:
no selection: list classes
selected class: list top 5 assignments (due takes first, then late, then other) + at end say "type list all to get full list"
selected material: show text of material * add material-downloading
selected assignment: list assignment details + your current status + what you have added so far (have index numbers)

Submit/sub
turn in the assignment: must have an assignment selected
will prompt for confirmation + list what you have so far

Add
add files to current selected assignment

Remove/rm
remove mentioned files from assignment: use index number OR file name

Comment/com
comment on selected object: assignment/material
if assignment: ask if public or private comment

Post/pos
post to course stream -> must have CLASS selected

help (1 arg, optional)
0 args:
"Welcome to ClassroomCLI, the command line interface for Google Classroom.\nFor command-specific usage, use `help [command]`.\n\nHere's a basic list of all commands:\n\nauthenticate\nopens a browser window asking you to allow our app to make changes to your account. Don't worry, you'll only have to do this once at first installation.\n\nlist\nLists all objects under the current selected object. If you don't have anything selected, it will list all classes.\n\nsubmit\nTurns in the selected assignment.\n\nadd\nAdd files to the current selected assignment\n\nremove\nRemove files from selected assignment\n\ncomment\nAdd a comment to the selected material/assignment\n\npost\n(Beta) Post a text announcement to the course stream.\n\nhelp\nDisplays this command. Use help [command] for more command-specific help."
