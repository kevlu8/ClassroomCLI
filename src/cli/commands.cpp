#include "commands.h"

bool authenticate() {
	bool success = false;
	try {
		ShellExecute(NULL, L"open", L"https://www.google.com", NULL, NULL, SW_HIDE);
		success = true;
	}
	catch (const std::exception& e) {
		success = false;
		throw e.what();
	}
	return success;
}

bool checkAuth(std::string auth) {
	bool success = false;
	try {
		ShellExecute(NULL, L"open", L"https://www.google.com", NULL, NULL, SW_HIDE);
		success = true;
	}
	catch (const std::exception& e) {
		success = false;
		throw e.what();
	}
	return success;
}

bool list(std::string scope = "all") {

}

bool select(std::string obj = "none") {

}

bool submit(std::string scope = "none") {

}

bool add(std::string file = "none") {

}

bool remove(std::string file = "none") {

}

bool comment(std::string comment) {

}

void help(std::string arg = "none") {
	if (arg == "none") {
		//show default help msg
		std::cout << "help goies here" << std::endl;
	}
}