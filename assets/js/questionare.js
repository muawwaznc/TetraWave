const btnMenuOpen = document.querySelector('.open-menu');
const btnMenuClose = document.querySelector('.close-menu');
const menuLinks = document.querySelectorAll('.menu-links li');
const btnWhatsapp = document.querySelectorAll('button.whatsapp');
const btnQuestionare = document.querySelectorAll('button.questionare');

function changeHeaderColor() {
    const nav = document.querySelector('#navigation')
    const navbarLogo = document.querySelector('#nav-logo')
    const logoDot = document.querySelector('#logo-dot')
    if (scrollY > 0) 
    {
        nav.classList.add('scroll');
        navbarLogo.classList.add('scroll');

        logoDot.classList.add('yellow-logo-dot');
        logoDot.classList.remove('black-logo-dot');
    }
    else 
    {
        nav.classList.remove('scroll');
        navbarLogo.classList.remove('scroll');

        logoDot.classList.add('black-logo-dot');
        logoDot.classList.remove('yellow-logo-dot');
    }
}

function showTopButton() {
    const topBtn = document.querySelector('#back-top-button')
    if (scrollY > 400) topBtn.classList.add('show')
    else topBtn.classList.remove('show')
}

function onScroll() {
    changeHeaderColor()
    showTopButton()
}

function openMenu() {
    const body = document.querySelector('body')
    body.classList.add('menu-expanded')
}

function closeMenu() {
    const body = document.querySelector('body')
    body.classList.remove('menu-expanded')
}

function toWhatsapp() {
    window.open('https://wa.me/15622087216', '_blank');
}

function toQuestionare()
{
    window.location.href='./Questionare.html'
}

document.addEventListener('scroll', onScroll)
btnMenuOpen.addEventListener('click', openMenu)
btnMenuClose.addEventListener('click', closeMenu)
menuLinks.forEach(element => element.addEventListener('click', closeMenu))
btnWhatsapp.forEach(element => element.addEventListener('click', toWhatsapp))
btnQuestionare.forEach(element => element.addEventListener('click', toQuestionare))


ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content,
  #about img`)



function SubmitForm() {
    // General Information
    var companyName = document.getElementById('inputCompanyName').value;
    var contactPerson = document.getElementById('inputContactPerson').value;
    var position = document.getElementById('inputPosition').value;
    var email = document.getElementById('inputEmail').value;
    var phoneNumber = document.getElementById('inputPhoneNumber').value;

    // Current Challenges
    var challengesRadioOptions = document.getElementsByName('challengesRadioOptions');
    var challenges = '';
    for (var i = 0; i < challengesRadioOptions.length; i++) {
        if (challengesRadioOptions[i].checked) {
            challenges = challengesRadioOptions[i].nextElementSibling.textContent.trim();
            if (challenges === 'Other') {
                challenges = document.getElementById('inputOtherChallengesRadio').value;
            }
            break;
        }
    }

    var challengesImpactRadioOptions = document.getElementsByName('challengesImpactRadioOptions');
    var challengesImpact = '';
    for (var j = 0; j < challengesImpactRadioOptions.length; j++) {
        if (challengesImpactRadioOptions[j].checked) {
            challengesImpact = challengesImpactRadioOptions[j].nextElementSibling.textContent.trim();
            if (challengesImpact === 'Other') {
                challengesImpact = document.getElementById('inputOtherChallengesImpactRadio').value;
            }
            break;
        }
    }

    // Automation Requirements
    var processRadioOptions = document.getElementsByName('processRadioOptions');
    var processes = '';
    for (var k = 0; k < processRadioOptions.length; k++) {
        if (processRadioOptions[k].checked) {
            processes = processRadioOptions[k].nextElementSibling.textContent.trim();
            if (processes === 'Other') {
                processes = document.getElementById('inputOtherProcessRadio').value;
            }
            break;
        }
    }

    var workflowsRadioOptions = document.getElementsByName('workflowsRadioOptions');
    var workflows = '';
    for (var l = 0; l < workflowsRadioOptions.length; l++) {
        if (workflowsRadioOptions[l].checked) {
            workflows = workflowsRadioOptions[l].nextElementSibling.textContent.trim();
            if (workflows === 'Yes') {
                workflows += ': ' + document.getElementById('inputOtherWorkflowsRadio').value;
            }
            break;
        }
    }

    // Customer Service Enhancement
    var inquiriesRadioOptions = document.getElementsByName('inquiriesRadioOptions');
    var customerInquiries = '';
    for (var m = 0; m < inquiriesRadioOptions.length; m++) {
        if (inquiriesRadioOptions[m].checked) {
            customerInquiries = inquiriesRadioOptions[m].nextElementSibling.textContent.trim();
            if (customerInquiries === 'Other') {
                customerInquiries = document.getElementById('inputOtherInquiriesRadio').value;
            }
            break;
        }
    }

    var interactionRadioOptions = document.getElementsByName('interactionRadioOptions');
    var customerInteractions = '';
    for (var n = 0; n < interactionRadioOptions.length; n++) {
        if (interactionRadioOptions[n].checked) {
            customerInteractions = interactionRadioOptions[n].nextElementSibling.textContent.trim();
            if (customerInteractions === 'Other') {
                customerInteractions = document.getElementById('inputOtherInteractionRadio').value;
            }
            break;
        }
    }

    var sentimentRadioOptions = document.getElementsByName('sentimentRadioOptions');
    var sentimentAnalysis = '';
    for (var o = 0; o < sentimentRadioOptions.length; o++) {
        if (sentimentRadioOptions[o].checked) {
            sentimentAnalysis = sentimentRadioOptions[o].nextElementSibling.textContent.trim();
            break;
        }
    }

    // Email Management
    var manageEmailRadioOptions = document.getElementsByName('manageEmailRadioOptions');
    var emailManagement = '';
    for (var p = 0; p < manageEmailRadioOptions.length; p++) {
        if (manageEmailRadioOptions[p].checked) {
            emailManagement = manageEmailRadioOptions[p].nextElementSibling.textContent.trim();
            break;
        }
    }

    var automatedEmailRadioOptions = document.getElementsByName('automatedEmailRadioOptions');
    var automatedEmailHandling = '';
    for (var q = 0; q < automatedEmailRadioOptions.length; q++) {
        if (automatedEmailRadioOptions[q].checked) {
            automatedEmailHandling = automatedEmailRadioOptions[q].nextElementSibling.textContent.trim();
            break;
        }
    }

    var AIEmailRadioOptions = document.getElementsByName('AIEmailRadioOptions');
    var AIEmailRouting = '';
    for (var r = 0; r < AIEmailRadioOptions.length; r++) {
        if (AIEmailRadioOptions[r].checked) {
            AIEmailRouting = AIEmailRadioOptions[r].nextElementSibling.textContent.trim();
            break;
        }
    }

    // Industry Specific Solutions
    var industryRadioOptions = document.getElementsByName('industryRadioOptions');
    var industry = '';
    for (var s = 0; s < industryRadioOptions.length; s++) {
        if (industryRadioOptions[s].checked) {
            industry = industryRadioOptions[s].nextElementSibling.textContent.trim();
            if (industry === 'Other') {
                industry = document.getElementById('inputOtherIndustryRadio').value;
            }
            break;
        }
    }

    var AiIndustryRadioOptions = document.getElementsByName('AiIndustryRadioOptions');
    var industryApplications = '';
    for (var t = 0; t < AiIndustryRadioOptions.length; t++) {
        if (AiIndustryRadioOptions[t].checked) {
            industryApplications = AiIndustryRadioOptions[t].nextElementSibling.textContent.trim();
            if (industryApplications === 'Other') {
                industryApplications = document.getElementById('inputOtherAiIndustryRadio').value;
            }
            break;
        }
    }

    var industrySolutionsRadioOptions = document.getElementsByName('industrySolutionsRadioOptions');
    var industryOutcomes = '';
    for (var u = 0; u < industrySolutionsRadioOptions.length; u++) {
        if (industrySolutionsRadioOptions[u].checked) {
            industryOutcomes = industrySolutionsRadioOptions[u].nextElementSibling.textContent.trim();
            if (industryOutcomes === 'Other') {
                industryOutcomes = document.getElementById('inputOtherindustrySolutionsRadio').value;
            }
            break;
        }
    }

    // Employee Productivity
    var adminRadioOptions = document.getElementsByName('adminRadioOptions');
    var administrativeTasks = '';
    for (var v = 0; v < adminRadioOptions.length; v++) {
        if (adminRadioOptions[v].checked) {
            administrativeTasks = adminRadioOptions[v].nextElementSibling.textContent.trim();
            if (administrativeTasks === 'Other') {
                administrativeTasks = document.getElementById('inputOtherAdminRadio').value;
            }
            break;
        }
    }

    var monitorEmpRadioOptions = document.getElementsByName('monitorEmpRadioOptions');
    var employeeEngagement = '';
    for (var w = 0; w < monitorEmpRadioOptions.length; w++) {
        if (monitorEmpRadioOptions[w].checked) {
            employeeEngagement = monitorEmpRadioOptions[w].nextElementSibling.textContent.trim();
            if (employeeEngagement === 'Other') {
                employeeEngagement = document.getElementById('inputOtherMonitorEmpRadio').value;
            }
            break;
        }
    }

    var AIHelpRadioOptions = document.getElementsByName('AIHelpRadioOptions');
    var AIAssistance = '';
    for (var x = 0; x < AIHelpRadioOptions.length; x++) {
        if (AIHelpRadioOptions[x].checked) {
            AIAssistance = AIHelpRadioOptions[x].nextElementSibling.textContent.trim();
            break;
        }
    }

    // Customization And Integration
    var integrationRadioOptions = document.getElementsByName('integrationRadioOptions');
    var integrationImportance = '';
    for (var i = 0; i < integrationRadioOptions.length; i++) {
        if (integrationRadioOptions[i].checked) {
            integrationImportance = integrationRadioOptions[i].nextElementSibling.textContent.trim();
            break;
        }
    }

    var thirdPartyAppRadioOptions = document.getElementsByName('thirdPartyAppRadioOptions');
    var thirdPartyApps = '';
    for (var j = 0; j < thirdPartyAppRadioOptions.length; j++) {
        if (thirdPartyAppRadioOptions[j].checked) {
            thirdPartyApps = thirdPartyAppRadioOptions[j].nextElementSibling.textContent.trim();
            if (thirdPartyApps === 'Other') {
                thirdPartyApps = document.getElementById('inputOtherThirdPartyAppRadio').value;
            }
            break;
        }
    }

    var industrySpecificRadioOptions = document.getElementsByName('industrySpecificRadioOptions');
    var industryCustomization = '';
    for (var k = 0; k < industrySpecificRadioOptions.length; k++) {
        if (industrySpecificRadioOptions[k].checked) {
            industryCustomization = industrySpecificRadioOptions[k].nextElementSibling.textContent.trim();
            break;
        }
    }

    // Sales And CRM Systems
    var salesStrategyRadioOptions = document.getElementsByName('salesStrategyRadioOptions');
    var aiCRMSystemsBenefit = '';
    for (var l = 0; l < salesStrategyRadioOptions.length; l++) {
        if (salesStrategyRadioOptions[l].checked) {
            aiCRMSystemsBenefit = salesStrategyRadioOptions[l].nextElementSibling.textContent.trim();
            break;
        }
    }

    var automaticFollowUpsRadioOptions = document.getElementsByName('automaticFollowUpsRadioOptions');
    var automateFollowUps = '';
    for (var m = 0; m < automaticFollowUpsRadioOptions.length; m++) {
        if (automaticFollowUpsRadioOptions[m].checked) {
            automateFollowUps = automaticFollowUpsRadioOptions[m].nextElementSibling.textContent.trim();
            break;
        }
    }

    var customerRelationshipsRadioOptions = document.getElementsByName('customerRelationshipsRadioOptions');
    var manageCustomerRelationships = '';
    for (var n = 0; n < customerRelationshipsRadioOptions.length; n++) {
        if (customerRelationshipsRadioOptions[n].checked) {
            manageCustomerRelationships = customerRelationshipsRadioOptions[n].nextElementSibling.textContent.trim();
            break;
        }
    }

    // Strategic Vision
    var longTermGoalsRadioOptions = document.getElementsByName('longTermGoalsRadioOptions');
    var longTermGoals = '';
    for (var i = 0; i < longTermGoalsRadioOptions.length; i++) {
        if (longTermGoalsRadioOptions[i].checked) {
            longTermGoals = longTermGoalsRadioOptions[i].nextElementSibling.textContent.trim();
            if (longTermGoals === 'Other') {
                longTermGoals = document.getElementById('inputOtherLongTermGoalsRadio').value;
            }
            break;
        }
    }

    var AIAdvantageRadioOptions = document.getElementsByName('AIAdvantageRadioOptions');
    var aiAdvantages = '';
    for (var j = 0; j < AIAdvantageRadioOptions.length; j++) {
        if (AIAdvantageRadioOptions[j].checked) {
            aiAdvantages = AIAdvantageRadioOptions[j].nextElementSibling.textContent.trim();
            if (aiAdvantages === 'Other') {
                aiAdvantages = document.getElementById('inputOtherAIAdvantageRadio').value;
            }
            break;
        }
    }

    // Additional Comments
    var preferencesRadioOptions = document.getElementsByName('preferencesRadioOptions');
    var preferencesSpecified = '';
    for (var k = 0; k < preferencesRadioOptions.length; k++) {
        if (preferencesRadioOptions[k].checked) {
            preferencesSpecified = preferencesRadioOptions[k].nextElementSibling.textContent.trim();
            if (preferencesSpecified === 'Yes') {
                var otherPreferences = document.getElementById('inputOtherPreferencesRadio').value;
            }
            break;
        }
    }

    var additionalComments = document.getElementById('commentsTextarea').value;

    // Constructing the Email HTML
    var emailHTML = `
        <h2>General Information:</h2>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Contact Person:</strong> ${contactPerson}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>

        <h2>Current Challenges:</h2>
        <p><strong>Primary Challenge:</strong> ${challenges}</p>
        <p><strong>Impact on Operations:</strong> ${challengesImpact}</p>

        <h2>Automation Requirements:</h2>
        <p><strong>Processes Benefitting from Automation:</strong> ${processes}</p>
        <p><strong>Tasks/Workflows for AI-powered Automation:</strong> ${workflows}</p>

        <h2>Customer Service Enhancement:</h2>
        <p><strong>How Customer Inquiries are Handled:</strong> ${customerInquiries}</p>
        <p><strong>Channels for Customer Interactions:</strong> ${customerInteractions}</p>
        <p><strong>Sentiment Analysis Interest:</strong> ${sentimentAnalysis}</p>

        <h2>Email Management:</h2>
        <p><strong>Email Communication Management:</strong> ${emailManagement}</p>
        <p><strong>Interest in Automated Email Handling:</strong> ${automatedEmailHandling}</p>
        <p><strong>Interest in AI Email Routing:</strong> ${AIEmailRouting}</p>
    `

    // Industry Specific Solutions
    emailHTML += `
        <h2>Industry Specific Solutions:</h2>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Specific AI Applications:</strong> ${aiApplications}</p>
        <p><strong>Outcomes Desired:</strong> ${industryOutcomes}</p>
    `;

    // Append employee productivity
    emailHTML += `
        <h2>Employee Productivity:</h2>
        <p><strong>Administrative Tasks for Automation:</strong> ${adminTasks}</p>
        <p><strong>Employee Engagement Monitoring:</strong> ${employeeMonitoring}</p>
        <p><strong>Interest in AI Employee Tools:</strong> ${aiEmployeeTools}</p>
    `;

    // Append customization and integration
    emailHTML += `
        <h2>Customization And Integration:</h2>
        <p><strong>Integration Importance:</strong> ${integrationImportance}</p>
        <p><strong>Third-Party Applications for Integration:</strong> ${thirdPartyApps}</p>
        <p><strong>Industry-Specific Customization Required:</strong> ${industryCustomization}</p>
    `;

    // Append sales and CRM systems
    emailHTML += `
        <h2>Sales And CRM Systems:</h2>
        <p><strong>AI-enhanced CRM Systems Benefit:</strong> ${aiCRMSystemsBenefit}</p>
        <p><strong>Interest in Automating Follow-Ups:</strong> ${automateFollowUps}</p>
        <p><strong>Current Customer Relationship Management:</strong> ${manageCustomerRelationships}</p>
    `;

    // Append strategic vision
    emailHTML += `
        <h2>Strategic Vision:</h2>
        <p><strong>Long-term Goals for AI Adoption:</strong> ${longTermGoals}</p>
        <p><strong>Envisioned AI Advantages:</strong> ${aiAdvantages}</p>
    `;

    // Append additional comments
    emailHTML += `
        <h2>Additional Comments:</h2>
        <p><strong>Specific Needs or Preferences:</strong> ${preferencesSpecified === 'Yes' ? otherPreferences : 'None specified'}</p>
        <p><strong>Additional Feedback or Comments:</strong></p>
        <p>${additionalComments}</p>
    `;

    console.log(emailHTML);
}


(function () {
    'use strict';

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add('was-validated');
            }, false);
        });
})();
