// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;

struct Officer {
    address admin;
}

struct officeInfo {
    uint p1; // p1, p2, p3 gives available posts
    uint p2;
    uint p3;
    string name;
}

struct transferInfo {
    uint id;
    string source;
    string destination;
    uint timestamp;
    uint post;
    string reason;
}


contract Transfer {
    address public admin;
    uint public urgentRequired = 0;
    transferInfo[] public arr;
    mapping(address => Officer) Officers;

    modifier onlyAdmin(){
        require(msg.sender == admin, "Access restricted to admin");
        _;
    }

    officeInfo  o1 = officeInfo({p1: 1, p2: 2, p3: 4, name: "Mulund"});
    officeInfo  o2 = officeInfo({p1: 1, p2: 2, p3: 2, name: "Chembeur"});
    officeInfo  o3 = officeInfo({p1: 0, p2: 1, p3: 4, name: "Ghatkopar"});
    officeInfo  o4 = officeInfo({p1: 1, p2: 3, p3: 1, name: "Kurla"});
    officeInfo  o5 = officeInfo({p1: 0, p2: 4, p3: 2, name: "Parel"});
     officeInfo  o6 = officeInfo({p1: 1, p2: 4, p3: 1, name: "Dadar"});
     officeInfo  o7 = officeInfo({p1: 1, p2: 4, p3: 2, name: "Byculla"});
     officeInfo  o8 = officeInfo({p1: 1, p2: 4, p3: 4, name: "Malabar"});
     officeInfo  o9 = officeInfo({p1: 2, p2: 4, p3: 1, name: "Bandra"});
     officeInfo  o10 = officeInfo({p1: 1, p2: 4, p3: 2, name: "Mahim"});
     officeInfo  o11 = officeInfo({p1: 2, p2: 4, p3: 1, name: "Ville Parle"});
     officeInfo  o12 = officeInfo({p1: 1, p2: 4, p3: 2, name: "Andheri"});
     officeInfo  o13 = officeInfo({p1: 2, p2: 4, p3: 1, name: "Goregoan"});
     officeInfo  o14 = officeInfo({p1: 1, p2: 4, p3: 3, name: "Kandivli"});
     officeInfo  o15 = officeInfo({p1: 1, p2: 4, p3: 1, name: "Borivali"});
    
    officeInfo[] public offices;

    constructor() {
        admin = msg.sender;
         offices.push(o1);
         offices.push(o2);
         offices.push(o3);
         offices.push(o4);
         offices.push(o5);
          offices.push(o6);
          offices.push(o7);
          offices.push(o8);
          offices.push(o9);
          offices.push(o10);
          offices.push(o11);
          offices.push(o12);
          offices.push(o13);
          offices.push(o14);
          offices.push(o15);
         
        
    }

    function updateVacancies(string memory _name,uint _post,uint number) public{
        for(uint i=0;i<offices.length;i++){
             if (keccak256(abi.encodePacked(offices[i].name)) == keccak256(abi.encodePacked(_name)) && _post==1){
                offices[i].p1=number;
             }
             else if (keccak256(abi.encodePacked(offices[i].name)) == keccak256(abi.encodePacked(_name)) && _post==2){
                offices[i].p2=number;
             }
             else if (keccak256(abi.encodePacked(offices[i].name)) == keccak256(abi.encodePacked(_name)) && _post==3){
                offices[i].p3=number;
             }
        }
    }

    function addOffice(uint a, uint b, uint c, string memory _name) public {
        offices.push(officeInfo({p1: a, p2: b, p3: c, name: _name}));
    }

    function createAdmin() public {
        Officers[msg.sender].admin = msg.sender;
    }

    function updateInfo(string memory _source,string memory _option,uint _post) public{
        for(uint i=0;i<offices.length;i++){
             if (keccak256(abi.encodePacked(offices[i].name)) == keccak256(abi.encodePacked(_option)) && _post==1){
                 offices[i].p1=offices[i].p1-1;
             }
             else if (keccak256(abi.encodePacked(offices[i].name)) == keccak256(abi.encodePacked(_option)) && _post==2){
                 offices[i].p2=offices[i].p2-1;
             }
             else if (keccak256(abi.encodePacked(offices[i].name)) == keccak256(abi.encodePacked(_option)) && _post==3){
                 offices[i].p3=offices[i].p3-1;
             }

             if (keccak256(abi.encodePacked(offices[i].name)) == keccak256(abi.encodePacked(_source)) && _post==1){
                 offices[i].p1=offices[i].p1+1;
             }
             else if (keccak256(abi.encodePacked(offices[i].name)) == keccak256(abi.encodePacked(_source)) && _post==2){
                 offices[i].p2=offices[i].p2+1;
             }
             else if (keccak256(abi.encodePacked(offices[i].name)) == keccak256(abi.encodePacked(_source)) && _post==3){
                 offices[i].p3=offices[i].p3+1;
             }
        }

    }
    function Check(uint _id,string memory _option1,string memory _option2,string memory _option3,string memory _source) public view returns(bool){
        bool approved;

        if (keccak256(abi.encodePacked(_source)) == keccak256(abi.encodePacked(_option1))){
                 approved=false;
                return approved;
                
        }
        
        if (keccak256(abi.encodePacked(_source)) == keccak256(abi.encodePacked(_option2))){
                 approved=false;
                return approved;
                
        }
        
        if (keccak256(abi.encodePacked(_source)) == keccak256(abi.encodePacked(_option3))){
                 approved=false;
                return approved;
                
        }

        for(uint i=0;i<arr.length;i++){
            if (arr[i].id==_id && keccak256(abi.encodePacked(arr[i].destination)) == keccak256(abi.encodePacked(_option1))){
                approved=false;
                return approved;

            }
            if (arr[i].id==_id && keccak256(abi.encodePacked(arr[i].destination)) == keccak256(abi.encodePacked(_option2))){
                approved=false;
                return approved;
            }
            if (arr[i].id==_id && keccak256(abi.encodePacked(arr[i].destination)) == keccak256(abi.encodePacked(_option3))){
                approved=false;
                return approved;
            }
            if (arr[i].id==_id && keccak256(abi.encodePacked(arr[i].source)) == keccak256(abi.encodePacked(_option1))){
                approved=false;
                return approved;
            }
            if (arr[i].id==_id && keccak256(abi.encodePacked(arr[i].source)) == keccak256(abi.encodePacked(_option2))){
                approved=false;
                return approved;
            }
            if (arr[i].id==_id && keccak256(abi.encodePacked(arr[i].source)) == keccak256(abi.encodePacked(_option3))){
                approved=false;
                return approved;
            }
            
        }
        return true;
    }
    function random() public view returns(uint){
            return uint(keccak256(abi.encodePacked(block.prevrandao,block.timestamp,arr.length)));

        }

    function annualTransfer(uint _id, string memory _source, string memory _option1, string memory _option2, string memory _option3, string memory _reason, uint _post) public onlyAdmin {
       bool b= Check(_id,_option1,_option2,_option3,_source);
        require(b,"Invalid Options Given");
        for (uint i = 0; i < offices.length; i++) {
            if (keccak256(abi.encodePacked(offices[i].name)) == keccak256(abi.encodePacked(_option1))) {
                if (offices[i].p1 > 0 && _post==1) {
                    arr.push(transferInfo({id: _id, source: _source, destination: _option1, timestamp: block.timestamp, post: _post, reason: _reason}));
                
                   updateInfo(_source,_option1,_post);
                    b=true;
                return;
                    
                }
                else if (offices[i].p2 > 0 && _post==2) {
                    arr.push(transferInfo({id: _id, source: _source, destination: _option1, timestamp: block.timestamp, post: _post, reason: _reason}));
                    updateInfo(_source,_option1,_post);
                    b=true;
                    return;
                }
                else if (offices[i].p3 > 0 && _post==3) {
                    arr.push(transferInfo({id: _id, source: _source, destination: _option1, timestamp: block.timestamp, post: _post, reason: _reason}));
                   updateInfo(_source,_option1,_post);
                   b=true;
                    return;
                }
            }
            
        }
        for (uint i = 0; i < offices.length; i++) {
            if (keccak256(abi.encodePacked(offices[i].name)) == keccak256(abi.encodePacked(_option2))) {
                if (offices[i].p1 > 0 && _post==1) {
                    arr.push(transferInfo({id: _id, source: _source, destination: _option2, timestamp: block.timestamp, post: _post, reason: _reason}));
                   updateInfo(_source,_option2,_post);
                   b=true;
                    return;
                    
                }
                else if (offices[i].p2 > 0 && _post==2) {
                    arr.push(transferInfo({id: _id, source: _source, destination: _option2, timestamp: block.timestamp, post: _post, reason: _reason}));
                   updateInfo(_source,_option2,_post);
                   b=true;
                    return;
                }
                else if (offices[i].p3 > 0 && _post==3) {
                    arr.push(transferInfo({id: _id, source: _source, destination: _option2, timestamp: block.timestamp, post: _post, reason: _reason}));
                    updateInfo(_source,_option2,_post);
                    b=true;
                    return;
                }
            }
            
        }
        for (uint i = 0; i < offices.length; i++) {
            if (keccak256(abi.encodePacked(offices[i].name)) == keccak256(abi.encodePacked(_option3))) {
                if (offices[i].p1 > 0 && _post==1) {
                    arr.push(transferInfo({id: _id, source: _source, destination: _option3, timestamp: block.timestamp, post: _post, reason: _reason}));
                    updateInfo(_source,_option3,_post);
                    b=true;
                    return;
                    
                }
                else if (offices[i].p2 > 0 && _post==2) {
                    arr.push(transferInfo({id: _id, source: _source, destination: _option3, timestamp: block.timestamp, post: _post, reason: _reason}));
                    updateInfo(_source,_option3,_post);
                    b=true;
                    return;
                }
                else if (offices[i].p3 > 0 && _post==3) {
                    arr.push(transferInfo({id: _id, source: _source, destination: _option3, timestamp: block.timestamp, post: _post, reason: _reason}));
                    updateInfo(_source,_option3,_post);
                    b=true;
                    return;
                }
            }
            
        }
        
        doRandom(_id,_source,_option3,_post);
        //for(uint i=0;i<offices.length;)
        //require(b,"Vacancies are not available");
    }
    
   function doRandom(uint _id, string memory _source, string memory _option, uint _post) public {
    bool b = false;

    for (uint i = 0; i < offices.length; i++) {
         
        if (keccak256(abi.encodePacked(offices[i].name)) == keccak256(abi.encodePacked(_option))) {
            if (keccak256(abi.encodePacked(offices[i].name)) == keccak256(abi.encodePacked(_source))){
             continue;
         }
            uint k;
            if (i == offices.length - 1) {
                k = i;
            } else {
                k = i + 1;
            }

            uint t;
            if (i == 0) {
                t = offices.length - 1;
            } else {
                t = i - 1;
            }

            bool flag = true;

            while (k != i || flag) {
                if (flag) {
                    if (_post == 1 && offices[k].p1 > 0) {
                        bool a1 = Check(_id, offices[k].name, "a", "b",_source);
                        if (a1) {
                            UrgentTransfer(_id, _source, offices[k].name, "Annual Transfer", _post);
                            b = true;
                            break;
                        }
                    } else if (_post == 2 && offices[k].p2 > 0) {
                        bool a2 = Check(_id, offices[k].name, "a", "b",_source);
                        if (a2) {
                            UrgentTransfer(_id, _source, offices[k].name, "Annual Transfer", _post);
                            b = true;
                            break;
                        }
                    } else if (_post == 3 && offices[k].p3 > 0) {
                        bool a3 = Check(_id, offices[k].name, "a", "b",_source);
                        if (a3) {
                            UrgentTransfer(_id, _source, offices[k].name, "Annual Transfer", _post);
                            b = true;
                            break;
                        }
                    }
                }

                if (_post == 1 && offices[t].p1 > 0) {
                    bool a1 = Check(_id, offices[t].name, "a", "b",_source);
                    if (a1) {
                        UrgentTransfer(_id, _source, offices[t].name, "Annual Transfer", _post);
                        b = true;
                        break;
                    }
                } else if (_post == 2 && offices[t].p2 > 0) {
                    bool a2 = Check(_id, offices[t].name, "a", "b",_source);
                    if (a2) {
                        UrgentTransfer(_id, _source, offices[t].name, "Annual Transfer", _post);
                        b = true;
                        break;
                    }
                } else if (_post == 3 && offices[t].p3 > 0) {
                    bool a3 = Check(_id, offices[t].name, "a", "b",_source);
                    if (a3) {
                        UrgentTransfer(_id, _source, offices[t].name, "Annual Transfer", _post);
                        b = true;
                        break;
                    }
                }

                if (k == offices.length - 1) {
                    k = 0;
                } else {
                    k++;
                }

                if (t == 0) {
                    t = offices.length - 1;
                } else {
                    t--;
                }

                flag = false;
            }

            break;
        }
    }

    for(uint h=0;h<offices.length;h++){
        if(_post==1 && offices[h].p1>0){
        bool c=Check(_id,offices[h].name,"a","b",_source);
        if(c){
            UrgentTransfer(_id,_source,offices[h].name,"Annual Transfer",_post);
        }
    }
}

    if (!b) {
        revert("Not Possible");
    }
}



    function UrgentTransfer(uint _id, string memory _source, string memory _destination, string memory _reason, uint _post) public onlyAdmin {
    bool destinationFound = false;
    for (uint i = 0; i < offices.length; i++) {
        if (keccak256(abi.encodePacked(offices[i].name)) == keccak256(abi.encodePacked(_destination))) {
            if (offices[i].p1>0 && _post==1) {
                arr.push(transferInfo({id:_id, source:_source, destination:_destination, timestamp:block.timestamp, post:_post, reason:_reason}));
                destinationFound = true;
                updateInfo(_source,_destination,_post);
                break;
            }
            else if (offices[i].p2>0 && _post==2) {
                arr.push(transferInfo({id:_id, source:_source, destination:_destination, timestamp:block.timestamp, post:_post, reason:_reason}));
                destinationFound = true;
                updateInfo(_source,_destination,_post);
                break;
            }
            else if (offices[i].p3>0 && _post==3) {
                arr.push(transferInfo({id:_id, source:_source, destination:_destination, timestamp:block.timestamp, post:_post, reason:_reason}));
                destinationFound = true;
                updateInfo(_source,_destination,_post);
                break;
            }
        }
    }
    require(destinationFound, "Destination office not found with the specified post.");
}

function getInfo() public view returns(transferInfo[] memory){
    return arr;
}

function getOffices() public view returns(officeInfo[] memory){
    return offices;
}


}