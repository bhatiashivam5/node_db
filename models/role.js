module.exports = (sequelize,Sequelize)=>{
    const role  = sequelize.define('role',{
        role_id:{
            type:Sequelize.INTEGER,
            allowNULL:false,
            primaryKey:true
        },
        role_name:{
            type:Sequelize.STRING,
            allowNULL:false,
        },
      
    },{
        timestamps: false,
    }
    )
    return role;
}

