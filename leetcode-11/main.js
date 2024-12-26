var maxArea = function(height) {
    let i = 0
    let g = height.length - 1
    let max_area = 0
    while(i < g){
        let area = (g - i) * Math.min(height[i], height[g])
        max_area = Math.max(area, max_area)
        if(height[i] < height[g]){
            i += 1
        }else {
           g -= 1
        }
    }
    return max_area
};
maxArea()

// bu yerda masalani two pointer bo'yicha ishlandi
// arrayni ikki chekkasida sonlarni taqqoslab umumiy yuza hisoblab taqqoslandi