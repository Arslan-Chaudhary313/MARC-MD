/**
 * ============================================================================
 *   ███╗   ███╗ █████╗ ██████╗  ██████╗       ███╗   ███╗██████╗ 
 *   ████╗ ████║██╔══██╗██╔══██╗██╔════╝       ████╗ ████║██╔══██╗
 *   ██╔████╔██║███████║██████╔╝██║      █████╗██╔████╔██║██║  ██║
 *   ██║╚██╔╝██║██╔══██║██╔══██╗██║      ╚════╝██║╚██╔╝██║██║  ██║
 *   ██║ ╚═╝ ██║██║  ██║██║  ██║╚██████╗       ██║ ╚═╝ ██║██████╔╝
 *   ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝       ╚═╝     ╚═╝╚═════╝ 
 * ============================================================================
 *   Developed by: 𝐀𝐫𝐬𝐥𝐚𝐧 𝐂𝐡𝐚𝐮𝐝𝐡𝐚𝐫𝐲 👑
 *   File: config.js
 * ============================================================================
 */
/**
 * ᴍᴀʀᴄ-ᴍᴅ CONFIGURATION FILE
 * Developed by: Arslan Chaudhary 👑
 * Core bot configuration properties
 */

const config = {
    // Global Timezone Setting: Controls the time for all bot features including Task Manager and Islamic Reminders.
    timezone: "Asia/Karachi",

    // The display name of the bot owner.
    ownerName: "Your Name Here",

    // Primary owner WhatsApp number with country code (e.g., "923421547798"). Do not add '+' or spaces.
    ownerNumber: "Your Country Code And Number Here",

    // Universal prefix for triggering bot commands (e.g., ".", "!", "/").
    prefix: ".",

    // Bot operation mode: "public" -> Anyone can use the commands. "private" -> Only Owner, Sudo users, and Developers can use commands.
    WORKTYPE: "public",

    // ==========================================
    // TASK MANAGER SETTINGS (plugins/taskmanager.js)
    // ==========================================

    // Designated Group JID for Task Manager commands, alarms, and post receipts (e.g., "120363141234567890@g.us").
    taskGroupId: "Your_Task_Group_JID@g.us", // Replace with your actual task manager group JID

    // ==========================================
    // GLOBAL GROUP CONTROLS (plugins/group.js)
    // ==========================================

    // Global Antilink Guard: Set to true to enable silent link deletion across all groups, or false to disable globally.
    antilink: false,

    // Global Greetings System: Set to true to enable automated welcome and goodbye messages in groups, or false to disable globally.
    welcome: false,

    // ==========================================
    // STEALTH & GUARDIAN SETTINGS (plugins/stealth.js)
    // ==========================================

    // Anti-Delete Routing Destination: Defines where recovered deleted messages should be sent. Options: "chat" (original chat), "owner" (private inbox), "group" (dedicated Recovery Group).
    antiDeleteRouting: "chat", 

    // Recovery Group JID: Required ONLY if 'antiDeleteRouting' is set to "group". Provide a Valid WhatsApp Group ID (e.g., "120563041234567890@g.us") or leave empty "".
    recoveryGroupId: "Your_Recovery_Group_JID@g.us",

    // ==========================================
    // ISLAMIC REMINDERS & PRAYER ALERTS (plugins/islamic-reminders.js)
    // ==========================================

    // Auto Islamic Message: Set to true to enable automated Islamic reminders every 3 hours (skipped at midnight and 3 AM), or false to disable this feature.
    autoIslamicMessage: true,

    // Auto Prayer Alert: Set to true to enable automated prayer time notifications based on the times specified in prayer-times.json, or false to disable.
    autoPrayerAlert: true
};

export default config;
