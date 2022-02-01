#pragma once
#include "include.h"
//"authenticate", "auth", "list", "lis", "select", "sel", "submit", "sub", "add", "remove", "rem", "comment", "com", "help", "exit"
//for once, i'm actually going to have separate .h and .cpp files

//bool data types for easy error catching: true = success; false = error

bool checkAuth(std::string auth);

bool authenticate();

bool list(std::string scope = "all");

bool select(std::string obj = "none");

bool submit(std::string scope = "none");

bool add(std::string file = "none");

bool remove(std::string file = "none");

bool comment(std::string comment);

void help(std::string arg = "none");