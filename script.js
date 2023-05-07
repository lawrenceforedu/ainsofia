function openPopup(courseCode) {
    var title = document.getElementById("popup-title");
    var description = document.getElementById("popup-description");
    if (courseCode === "CSC574") {
        title.textContent = "CSC574 - Dynamic Web Application Development";
        description.textContent = "--------------------------------------------------------------------------------------------------------------------------------------\nLecturer Name: Nur Aina Khadijah binti Adnan.\n\nThe course introduces the students to web programming. It covers, among others, mark-up language, client-side scripting and server-side scripting.";
        description.style.whiteSpace = "pre-wrap";
    }
    else if (courseCode === "ITT569") {
        title.textContent = "ITT569 - Internet of thing";
        description.textContent = "--------------------------------------------------------------------------------------------------------------------------------------\nLecturer Name: Shapina binti Abdullah .\nNo Telephone:019235580\n\nThis course introduces Internet of Things and how it enables the Digital Transformation along with emerging technologies such as data analytics, artificial intelligence and the increased attention to cybersecurity. \n\nThese course modules describe importance of the new Intent Based Networking that uses a software-driven approach and machine learning to be able to connect and secure tens of billions of new devices with ease. Students will also learn to focuses on identifying, designing, prototyping, and presenting an IoT solution that securely solves a current business or social problem. End of this course student should identify and apply the multidisciplinary skills learned to solve a real-world problem.";
        description.style.whiteSpace = "pre-wrap";
    }
    else if (courseCode === "ELC550") {
        title.textContent = "ELC550 - English for academic writing";
        description.textContent = "--------------------------------------------------------------------------------------------------------------------------------------\nLecturer Name: Siti Fauziana binti Zakaria.\nNo Telephone:0124694391\n\nThis course focuses on developing students ability to write academic texts. It provides students with a structured method for paraphrasing, summarising and organising the content of written texts. This course also enhances students? critical thinking skills to synthesise and evaluate academic texts using a standardised reference/citation format.";
        description.style.whiteSpace = "pre-wrap";
    }
    else if (courseCode === "ITS462") {
        title.textContent = "ITS462 - Fundamental of Artificial Intelligence";
        description.textContent = "--------------------------------------------------------------------------------------------------------------------------------------\nLecturer Name: Dr. Farah Aqilah binti Bohani .\nNo Telephone:0132117890\n\nThis subject will cover fundamental concepts and methods of artificial intelligence and the artificial intelligence knowledge representation schemes which include description of automated reasoning with both propositional and predicated logic. \n\nOther topics presented are artificial intelligence problem solving methods that includes heuristics search procedures for general graphs, game playing strategies, resolution and rule based deduction systems, knowledge representation, and reasoning with uncertainty.";
        description.style.whiteSpace = "pre-wrap";
    }
    else if (courseCode === "ITT557") {
        title.textContent = "ITT557 - Web Application Security";
        description.textContent = "--------------------------------------------------------------------------------------------------------------------------------------\nLecturer Name: Ts. Dr. Mohsen bin Mohamad Hata .\nNo Telephone:0129811334\n\nThis course is for software developers, application architects, penetration testers who are tasked with implementing, managing or protecting Web applications. The course begins by introducing the basics of HTTP to users. \n\nFrom there, common web applications vulnerabilities are covered in detail with hands on demonstration to help students better understand the vulnerabilities. Mitigation strategies from an infrastructure, architecture, and coding perspective will be discussed alongside real-world applications that have been proven to work. The testing aspect of vulnerabilities will also be covered so that students can ensure their application is tested for the vulnerabilities discussed in the course.";
        description.style.whiteSpace = "pre-wrap";
    }
    else if (courseCode === "ITT588") {
        title.textContent = "ITT588 - Front-end Technology";
        description.textContent = "--------------------------------------------------------------------------------------------------------------------------------------\nLecturer Name: Kamarul Ariffin bin Abdul Basit .\nNo Telephone:0128247372 \n\nKnowledge of web technology is very important for student to understand the process of web development. This course is designed to expose the student on client-side technology in the web development such as HTML, CSS, JavaScript. The course balances the conceptual theories and the practical skills in web development technology.";
        description.style.whiteSpace = "pre-wrap";
    }
    else if (courseCode === "CST2JA") {
        title.textContent = "CST2JA - Introductory Japanese (Level II)";
        description.textContent = "--------------------------------------------------------------------------------------------------------------------------------------\nLecturer Name: Noor Aizah Binti Abas.\n\nThis is the second of a three part programme for Japanese language course. Katakana characters will be introduced. The syllabus ranges from the basic Japanese structures to cultured information. It helps to equip the students with introductory communicative competence";
        description.style.whiteSpace = "pre-wrap";
    }

    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}