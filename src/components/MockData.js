export const statusData =
    [
    {
        id:1,
        parent:"User" ,
        pods:
        [
            {id: 3, container:"User-profile-store", statusCode:"500", message:"Offline", timeStamp:"2022-01-01:04:06:05" },
            {id: 4, container:"User-profile-index", statusCode:"", message:"Unknown", timeStamp:"2022-01-01:04:06:05" },
            {id: 5, container:"User-profile-reindexer", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:06:05" },
        ]
    }
    ,
    {
        id:2,
        parent:"Mailbox" ,
        pods:
        [
            {id: 5, container:"User-profile-reindexer", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:06:05" },
            {id: 6, container:"Mailbox-store", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:06:05" },
            {id: 7, container:"Mailbox-index", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:06:05" },
            {id: 8, container:"Mailbox-reindexer", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:06:05" },
        ]
        
    }
    ,
    {
        id:3,
        parent:"Login" ,
        pods:
        [  
            {id: 1, container:"Auth-server", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:01:01" },
            {id: 2, container:"Identity-registry-index", statusCode:"403", message:"Semi operational", timeStamp:"2022-01-01:04:04:02" },
            {id: 3, container:"Identity-registry-service", statusCode:"", message:"Unknown", timeStamp:"2022-01-01:04:04:02" },
            {id: 4, container:"Identity-registry-Store", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:04:02" },
        ]
        
    }
    ,
    {
        id:4,
        parent:"Gateway" ,
        pods:
        [  
            {id:1, container:"Gateway", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:04:02" },
        ]
        
    }
    ]

export const previousStatusData =
[
    {id: 1, title:"Severe downtime", message:"Fully operational", timeStamp:"2022-01-01:04:01:01", severity:"5" },
    {id: 2, title:"Minor maintainance", message:"Fully operational", timeStamp:"2022-01-01:04:01:01", severity:"2" },
    {id: 3, title:"Inoperable sign-in", message:"Fully operational", timeStamp:"2022-01-01:04:01:01", severity:"4" },
    {id: 4, title:"Scheduled downtime", message:"Fully operational", timeStamp:"2022-01-01:04:01:01", severity:"1" },
    {id: 5, title:"Unexpected downtime", message:"Fully operational", timeStamp:"2022-01-01:04:01:01", severity:"3" },
]

