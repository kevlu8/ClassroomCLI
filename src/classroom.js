const axios = require('axios');
const { google } = require('googleapis');
const fs = require('fs');
const readline = require('readline');

const SCOPES = ['https://www.googleapis.com/auth/classroom.courses', 
    'https://www.googleapis.com/auth/classroom.rosters',
    'https://www.googleapis.com/auth/classroom.coursework.me',
    'https://www.googleapis.com/auth/classroom.coursework.students',
    'https://www.googleapis.com/auth/classroom.announcements',
    'https://www.googleapis.com/auth/classroom.guardianlinks.students',
    'https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly',
    'https://www.googleapis.com/auth/classroom.profile.photos',
    'https://www.googleapis.com/auth/classroom.profile.emails'
];

const TOKEN_PATH = 'token.json';

fs.readFile('client_secrets.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    authorize(JSON.parse(content), listCourses);
});

function authorize(credentials, callback) {
    const {client_secret, client_id, redirect_uris} = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]);
  
    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
      if (err) return getNewToken(oAuth2Client, callback);
      oAuth2Client.setCredentials(JSON.parse(token));
      callback(oAuth2Client);
    });
}

function getNewToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
        rl.close();
        oAuth2Client.getToken(code, (err, token) => {
        if (err) return console.error('Error retrieving access token', err);
        oAuth2Client.setCredentials(token);
        fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
            if (err) return console.error(err);
            console.log('Token stored to', TOKEN_PATH);
        });
        callback(oAuth2Client);
        });
    });
}

function getRequest(url, sentHeaders) {
    axios.get(url, {
        headers: {
            sentHeaders
        }}).then(res => {
            console.log(res.data);
            console.log(`Statuscode: ${res.status}`);
        }).catch(err => {
            console.log(err);
        });
}


function authenticate() {
    
}

function joinCourse(accessToken) {

}

function leaveCourse(accessToken) {

}

function listCourseAnnouncements(accessToken, courseID) {

}

function listCourseWork(accessToken, courseID) {

}

function listStudentSubmissions(accessToken, courseID, courseworkID) {

}

function listCourses(auth) {
    const classroom = google.classroom({version: 'v1', auth});
    classroom.courses.list({
        pageSize: 10,
    }, (err, res) => {
        if (err) return console.error('The API returned an error: ' + err);
        const courses = res.data.courses;
        if (courses && courses.length) {
            console.log('Courses:');
            courses.forEach((course) => {
            console.log(`${course.name} (${course.id})`);
            });
        } else {
            console.log('No courses found.');
        }
    });
}

function joinCourse(accessToken) {

}

function leaveCourse(accessToken) {

}

function listCourseAnnouncements(accessToken, courseID) {

}

function listCourseWork(accessToken, courseID) {

}

function listStudentSubmissions(accessToken, courseID, courseworkID) {

}


module.exports = {
    authenticate,
    listCourses,
    joinCourse,
    leaveCourse,
    listCourseAnnouncements,
    listCourseWork,
    listStudentSubmissions
};
