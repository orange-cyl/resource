export function getTreeData(data){
                // 循环遍历json数据
                for(var i=0;i<data.length;i++){
                    
                    if(data[i].childs.length<1){
                        // childs若为空数组，则将childs设为undefined
                        data[i].childs=undefined;
                    }else {
                        // childs若不为空数组，则继续 递归调用 本方法
                        this.getTreeData(data[i].childs);
                    }
                }
                return data;
}

 // default getTreeData;