export const statusData =
    [
    {
        id:1,
        parent:"User" ,
        notification: false,
        pods:
        [
            {id: 1, service:"Onboarding", statusCode:"500", timeStamp:"2022-01-01:04:06:05" },
            {id: 2, service:"Server", statusCode:"", timeStamp:"2022-01-01:04:06:05" },
            {id: 3, service:"Change details", statusCode:"200", timeStamp:"2022-01-01:04:06:05" },
        ]
    }
    ,
    {
        id:2,
        parent:"Mailbox" ,
        notification: false,
        pods:
        [
            {id: 4, service:"Recieve emails", statusCode:"200", timeStamp:"2022-01-01:04:06:05" },
            {id: 5, service:"Search emails", statusCode:"200", timeStamp:"2022-01-01:04:06:05" },
            {id: 6, service:"Send emails", statusCode:"200", timeStamp:"2022-01-01:04:06:05" },
            {id: 7, service:"Forward emails", statusCode:"200", timeStamp:"2022-01-01:04:06:05" },
        ]
    }
    ,
    {
        id:3,
        parent:"Login" ,
        notification: false,
        pods:
        [  
            {id: 8, service:"Log in", statusCode:"200", timeStamp:"2022-01-01:04:01:01" },
            {id: 9, service:"Change passwords", statusCode:"403", timeStamp:"2022-01-01:04:04:02" },
            {id: 10, service:"Login in other mailbox", statusCode:"", timeStamp:"2022-01-01:04:04:02" },
            {id: 11, service:"Update Preferences", statusCode:"200",timeStamp:"2022-01-01:04:04:02" },
        ]
        
    }
    ,
    {
        id:4,
        parent:"System" ,
        notification: false,
        pods:
        [  
            {id:12, service:"System Status", statusCode:"200", timeStamp:"2022-01-01:04:04:02" },
            {id:12, service:"Server Status", statusCode:"200",timeStamp:"2022-01-01:04:04:02" },
        ]
        
    }
    ,
    {
        id:5,
        parent:"Admin Portal" ,
        notification: false,
        pods:
        [
            {id: 13, service:"Login", statusCode:"200", timeStamp:"2022-01-01:04:06:05" },
            {id: 14, service:"Create branch", statusCode:"200", timeStamp:"2022-01-01:04:06:05" },
            {id: 15, service:"Delete branch", statusCode:"200", timeStamp:"2022-01-01:04:06:05" },
            {id: 16, service:"Edit branch", statusCode:"200", timeStamp:"2022-01-01:04:06:05" },
        ]
    }
    ,
    {
        id:6,
        parent:"MitHighlight" ,
        notification: false,
        pods:
        [  
            {id: 17, service:"Highlight", statusCode:"200",  timeStamp:"2022-01-01:04:01:01" },
            {id: 18, service:"Export", statusCode:"200", timeStamp:"2022-01-01:04:01:01" },
            {id: 19, service:"Edit", statusCode:"200",timeStamp:"2022-01-01:04:01:01" },
        ]
        
    }
    ,
    {
        id:7,
        parent:"MitPay" ,
        notification: false,
        pods:
        [  
            {id: 20, service:"Pay", statusCode:"200", timeStamp:"2022-01-01:04:01:01" },
            {id: 21, service:"Cancel", statusCode:"200", timeStamp:"2022-01-01:04:01:01" },
            {id: 21, service:"submit Payment request", timeStamp:"2022-01-01:04:01:01" },
        ]
        
    }
    ,
    {
        id:8,
        parent:"MitForms" ,
        notification: false,
        pods:
        [  
            {id: 20, service:"Recive form", statusCode:"200", timeStamp:"2022-01-01:04:01:01" },
            {id: 21, service:"Send form", statusCode:"200", timeStamp:"2022-01-01:04:01:01" },
            {id: 22, service:"Complete form", statusCode:"200", timeStamp:"2022-01-01:04:01:01" },
        ]
        
    }
    ,
    {
        id:9,
        parent:"MitSign" ,
        notification: false,
        pods:
        [  
            {id: 23, service:"Sign paper", statusCode:"200", timeStamp:"2022-01-01:04:01:01" },
            {id: 24, service:"Send email to sign", statusCode:"200", timeStamp:"2022-01-01:04:01:01" },
        ]
        
    }
    ]

export const previousStatusData =
[
    {id: 1, title:"Severe downtime", message:"There is a situation in the platform where multiple services are currently unavailable and not functioning as expected. This means that users are unable to access these services and use them as they normally would. The cause of the issue is currently unknown, but the platform's technical team is working to identify and resolve the problem as soon as possible. It is important to note that unexpected downtime like this can happen in any platform and is not uncommon. The technical team is doing their best to restore the services and get them back online as quickly as they can. In the meantime, users may need to find alternative solutions or workarounds to complete their tasks. The platform will continue to monitor the situation and provide updates as more information becomes available. We apologize for any inconvenience this unexpected downtime may have caused."
    , timeStamp:"2023-01-01:04:01:01", severity:"5" },
    {id: 2, title:"Minor maintainance", message:"The platform is currently undergoing some minor maintenance to improve the performance and stability of its non-critical features. This means that certain parts of the platform that are not critical to its core functionality may be temporarily unavailable during this time. The maintenance is being performed to resolve any underlying issues and to ensure that the platform continues to function smoothly for all users. The downtime is expected to be minimal and the technical team is working to complete the maintenance as quickly as possible. It is important to note that the platform's critical features and services remain available during this time.",
     timeStamp:"2023-01-01:04:01:01", severity:"2" },
    {id: 3, title:"Inoperable sign-in", message:"There is an issue with the sign-in functionality for some users in the platform. It is important to note that not all users are affected by this issue, only a portion of users are experiencing difficulties with the sign-in process. The technical team is aware of the issue and has deployed engineers to investigate and resolve the problem. The engineers are working to identify the cause of the issue and to restore the sign-in functionality for affected users as soon as possible. The platform will continue to monitor the situation and provide updates as more information becomes available. In the meantime, users who are experiencing difficulties with the sign-in process should contact the platform's support team for assistance. We apologize for any inconvenience this issue may have caused and appreciate your patience while the engineers work to resolve the problem.",
     timeStamp:"2023-01-01:04:01:01", severity:"4" },
    {id: 4, title:"Unexpected downtime", message:"There is an unexpected issue with some critical features of the platform, causing them to be unavailable at this time. The technical team is aware of the situation and is actively working to resolve the problem and restore the affected features as soon as possible. The cause of the downtime is currently being investigated and the team is making every effort to minimize the impact on users. In the meantime, it is possible that some tasks and operations may be disrupted or limited. The platform will continue to provide updates on the situation as more information becomes available. We understand the inconvenience this unexpected downtime may cause and appreciate your patience while we work to restore the affected features. If you are experiencing any issues, please reach out to the platform's support team for assistance.",
     timeStamp:"2022-12-31:10:18:17", severity:"3" },
    {id: 5, title:"Scheduled downtime", message:"Several services within the platform are currently offline for maintenance. This means that the platform is undergoing some necessary updates, fixes, or improvements, and as a result, these services are temporarily unavailable for users. Maintenance is a routine process that is done to ensure the smooth functioning and performance of the platform. During this time, the technical team is working to improve the services and resolve any underlying issues. The downtime is expected and has been planned in advance to minimize any disruption to users. It is important to note that the maintenance is being carried out to ensure the long-term stability and reliability of the platform. The platform will continue to monitor the progress of the maintenance and provide updates as more information becomes available."
     ,timeStamp:"2022-06-07:09:07:54", severity:"1" },
]
