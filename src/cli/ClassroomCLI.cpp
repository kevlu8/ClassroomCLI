#include "include.h"
#define string std::string

bool enterCLI = false;
const string cmds[] = { "authenticate", "auth", "list", "lis", "select", "sel", "submit", "sub", "add", "remove", "rem", "comment", "com", "help", "exit" };

template <typename Out>
void split(const string& s, char delim, Out result) {
	std::istringstream iss(s);
	string item;
	while (std::getline(iss, item, delim)) {
		*result++ = item;
	}
}

std::vector<string> split(const string& s, char delim) {
	std::vector<string> elems;
	split(s, delim, std::back_inserter(elems));
	return elems;
}

int main(int argc, char* argv[]) {
	TCHAR user[UNLEN + 1];
	DWORD username_len = UNLEN + 1;
	GetUserName((TCHAR*)user, &username_len);

	if (argc == 1) {
		enterCLI = true;
	}

	if (enterCLI) {
		string inp1;
		while (inp1 != "exit") {
			auto cwd = std::filesystem::current_path();
			std::wcout << user << "@Classroom" << cwd << "\n$ ";
			std::cin >> inp1;
			bool validCmd = false;
			int cmdID;

			std::vector<string> inp2 = split(inp1, ' ');
			string* inp = &inp2[0];

			auto ifcmd = [inp](string inputValue) {
				if (inp[0] == inputValue) {
					return true;
				} return false;
			};

			for (unsigned int i = 0; i < sizeof(cmds) / sizeof(cmds[0]); i++) {
				if (inp[0] == cmds[i]) {
					validCmd = true;
					cmdID = i;
					break;
				}
			}

			if (!validCmd) {
				std::cout << "\"" << inp[0] << "\"" << " is not recognized as a valid command.\n";
			}

			else {
				if (ifcmd("authenticate") || ifcmd("auth")) {
					//authenticate user
				}
				else if (ifcmd("list") || ifcmd("lis")) {
					//list classes
				}
				else if (ifcmd("select") || ifcmd("sel")) {
					//select 
				}
			}
		}
		return 0;
	}
	else {
		std::cout << "you included arguments! this is currently unsupported but will be implemented in the future.\n";
		Sleep(5000);
		return 0;
	}
}