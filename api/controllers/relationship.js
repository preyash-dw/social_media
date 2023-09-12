export const getrelationship=(req,res)=>{
    const q="SELECT followerUserId from relationship WHERE followedUserId= ?";
    db.query(q,[req.query.followedUserId],(err,data)=>{
        if(err) return res.status(500).json(err);

        res.status(200).json(data.map(relationship=>relationship.followedUserId));
    })
}
export const addrelationship=(req,res)=>{

}
export const deleterelationship=(req,res)=>{

}