describe('Számítás tesztelése', () => { 
    it('Normál1: oldal: 10, eredmény: 14.14', () => {     
        let actual = calcLapatlo(10);
        let expected = 14.14;  
        expect(actual).toBeCloseTo(expected, 0.01);  
    });

    it('Normál1: oldal: 10, eredmény: 17.32', () => {    
        let actual = calcTestatlo(10);
        let expected = 17.32;   
        expect(actual).toBeCloseTo(expected, 0.01);   
    });
});