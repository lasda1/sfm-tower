const classe =`
    type class{
        id: ID
        name: String!

    }

    input InputClass{
        name:String
    }
    type Query {
        classes: [class]
        class(id:ID!): class
    }
    type mutation{
        addclasse(input: InputClass!): class
    }
    `;
module.exports = classe;