const helpObj = {
  "commands": [
    ["'about'", "Quick intro to me!"],
    ["'projects'", "What I've been working on."],
    ["'whoami'", "A slightly longer intro to me and my experience."],
    ["'download'", "Download my resume."],
    ["'repo'", "View the Github repo for this website."],
    ["'banner'", "Display the banner again."],
    ["'clear'", "Clear the terminal."]
  ],
}

const createHelp = (): string[] => {
  const help: string[] = []
  help.push("<br>")

  helpObj.commands.forEach((ele) => {
    if (Array.isArray(ele) && ele.length === 2 && typeof ele[0] === 'string' && typeof ele[1] === 'string') {
      const SPACE = "&nbsp;";
      let string = "";
      string += SPACE.repeat(2);
      string += "<span class='command'>";
      string += ele[0];
      string += "</span>";
      string += SPACE.repeat(17 - ele[0].length);
      string += ele[1];
      help.push(string);
    }
  })

  help.push("<br>");
  help.push("Press <span class='keys'>[Tab]</span> for auto completion.");
  help.push("Press <span class='keys'>[Esc]</span> to clear the input line.");
  help.push("Press <span class='keys'>[↑][↓]</span> to scroll through your history of commands.");
  help.push("<br>");
  return help
}

export const HELP = createHelp();
