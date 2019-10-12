({
    fetchData: function (cmp,event,helper) {
        
    
        
        var action = cmp.get("c.getAllAccounts");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                
           /* cmp.set('v.columns', [
            {label: 'Id', fieldName: 'Id', type: 'text' , editable: true},
            {label: 'Name', fieldName: 'Name', type: 'text' ,editable: true},
            {label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'currency' ,editable: true},
            {label: 'Description', fieldName: 'Description', type: 'text' ,editable: true},
            {label: 'Number Of Employees', fieldName: 'NumberOfEmployees', type: 'number' ,editable: true},
            {label: 'Industry', fieldName: 'Industry', type: 'text' ,editable: true},
            {label: 'Rating', fieldName: 'Rating', type: 'text' ,editable: true},
            {label: 'Phone', fieldName: 'Phone', type: 'phone' ,editable: true } 
            ]);
            */
                
                
                
                var data = response.getReturnValue();
                
                 var opts = new Array();
        		opts.push({label: 'Id', fieldName: 'Id', type: 'text' , editable: true});
                // Set the feed types on the lightning:select component
                for (var i = 0; i < data.length+1; i++) {
                  opts.push({label: 'Record'+i, fieldName: 'Record'+i, type: 'text' ,editable: true});
                 }
                cmp.set('v.columns',opts);
                
                 var newData = new Array();
                 var id={};
                 id['Id']='1';
                 var name={};
                 name['Id']='2';
                 var revenue={};
                 revenue['Id']='3';
                 var desc={};
                 desc['Id']='4';
                 var employees={};
                 employees['Id']='5';
                 var industry={};
                 industry['Id']='6';
                 var rating={};
                rating['Id']='7';
                 var phone={};
                 phone['Id']='8';
                for (var i = 0; i < data.length; i++) {
                    id['Record'+i]=data[i].Id;
                    name['Record'+i]=data[i].Name;
                    revenue['Record'+i]=data[i].AnnualRevenue;
                    desc['Record'+i]=data[i].Description
                    employees['Record'+i]=data[i].NumberOfEmployees;
                    industry['Record'+i]=data[i].Industry;
                    rating['Record'+i]=data[i].Rating;
                    phone['Record'+i]=data[i].Phone;
                }
                newData.push(id);
                newData.push(name);
                newData.push(revenue);
                newData.push(desc);
                newData.push(employees);
                newData.push(industry);
                newData.push(rating);
                newData.push(phone);
                cmp.set('v.data',newData);
                console.log(data);
                console.log(newData);
            }
            // error handling when state is "INCOMPLETE" or "ERROR"
        });
        $A.enqueueAction(action);
    }
})



/*({
    fetchData: function (cmp,event,helper) {
        var action = cmp.get("c.getAllAccounts");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                 var data = response.getReturnValue();
                //cmp.set('v.data',data);
                //console.log(data);
                var opts = new Array();
                var emptyData = new Array();
                // Set the feed types on the lightning:select component
                opts.push({label: 'Id', fieldName: 'Id', type: 'text' , editable: true});
                for (var i = 0; i < data.length; i++) {
                   opts.push({label: 'Name'+i, fieldName: 'Name'+i, type: 'text' ,editable: false});
                 }
                  component.set('v.columns', opts);
                  cmp.set('v.data',emptyData);
            }
            // error handling when state is "INCOMPLETE" or "ERROR"
        });
        $A.enqueueAction(action);
    }
})
*/
