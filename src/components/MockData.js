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
    {id: 1, title:"Severe downtime", message:"Fully operational", severity:"5" },
    {id: 2, title:"Minor maintainance", message:"Fully operational", severity:"2" },
    {id: 3, title:"Inoperable sign-in", message:"Fully operational", severity:"4" },
    {id: 4, title:"Scheduled downtime", message:"Fully operational", severity:"1" },
    {id: 5, title:"Unexpected downtime", message:"Fully operational", severity:"3" },
]

export const statusListData =
[
    {id: 1, title:"Severe downtime", message:"Fully operational", timeStamp:"2022-01-01:04:01:01", severity:"5" },
    {id: 2, title:"Minor maintainance", message:"Fully operational", timeStamp:"2022-01-01:04:01:01", severity:"2" },
    {id: 3, title:"Inoperable sign-in", message:"Fully operational", timeStamp:"2022-01-01:04:01:01", severity:"4" },
    {id: 4, title:"Scheduled downtime", message:"Fully operational", timeStamp:"2022-01-01:04:01:01", severity:"1" },
    {id: 5, title:"Unexpected downtime", message:"Fully operational", timeStamp:"2022-01-01:04:01:01", severity:"3" },
    {id: 6, service:"User-profile-store", statusCode:"500", message:"Offline", timeStamp:"2022-01-01:04:06:05" },
    {id: 7, service:"User-profile-index", statusCode:"", message:"Unknown", timeStamp:"2022-01-01:04:06:05" },
    {id: 8, service:"User-profile-reindexer", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:06:05" },
    {id: 9, service:"User-profile-reindexer", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:06:05" },
    {id: 10, service:"Mailbox-store", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:06:05" },
    {id: 11, service:"Mailbox-index", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:06:05" },
    {id: 12, service:"Mailbox-reindexer", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:06:05" },
    {id: 13, service:"Auth-server", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:01:01" },
    {id: 14, service:"Identity-registry-index", statusCode:"403", message:"Semi operational", timeStamp:"2022-01-01:04:04:02" },
    {id: 15, service:"Identity-registry-service", statusCode:"", message:"Unknown", timeStamp:"2022-01-01:04:04:02" },
    {id: 16, service:"Identity-registry-Store", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:04:02" },
    {id: 17, service:"Gateway", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:04:02" },
]
