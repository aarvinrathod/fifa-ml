var current_stats={}
var player_select=d3.select('#selDataset')
d3.json('/fetch').then(data=>{
    // console.log(data)
    var fullname_list=Object.values(data['FullName'])
    for (var i=0; i<fullname_list.length; i++){
        player_select.append('option').text(fullname_list[i]).property('value', fullname_list[i])
    }
})

function optionChanged(fullname){
    d3.json(`/player_stats/${fullname}`).then(stats_json=>{
        // iteate through the object to display key <> value
        current_stats=stats_json
        console.log(current_stats)
        var rating = current_stats['Overall']
        var value = current_stats["ValueEUR"]
        var wage = current_stats["WageEUR"]
        var release = current_stats["ReleaseClause"]
        d3.select('#old_overall_rating').text(rating)
        d3.select('#old_value').text(value)
        d3.select('#old_wage').text(wage)
        d3.select('#old_release_clause').text(release)
    })
}

function prediction(){
    console.log(current_stats)
    // d3.json("/predict").then(result=>{
        
    var age = current_stats["Age"]
    var height = current_stats["Height"]
    var weight = current_stats["Weight"]
    var weak_foot = current_stats["WeakFoot"]
    var skills = current_stats["SkillMoves"]
    var attack = current_stats["AttackingWorkRate"]
    var defend = current_stats["DefensiveWorkRate"]
    var pace = parseInt(current_stats["PaceTotal"]) + parseInt(d3.select("#input_pace").property('value'))
    var shooting = current_stats["ShootingTotal"]
    var passing = current_stats["PassingTotal"]
    var dribbling = current_stats["DribblingTotal"]
    var defendingT = parseInt(current_stats["DefendingTotal"]) + parseInt(d3.select("#input_defend").property('value'))
    var physical = current_stats["PhysicalityTotal"]
    var cross = current_stats["Crossing"]
    var heading = current_stats["HeadingAccuracy"]
    var shortpass = parseInt(current_stats["ShortPassing"]) + parseInt(d3.select("#input_pass").property('value'))
    var volleys = current_stats["Volleys"]
    var curve = current_stats["Curve"]
    var accuracy = current_stats["FKAccuracy"]
    var longpass = current_stats["LongPassing"]
    var control = parseInt(current_stats["BallControl"]) + parseInt(d3.select("#input_ball").property('value'))
    var agility = current_stats["Agility"]
    var balance = current_stats["Balance"]
    var shot = current_stats["ShotPower"]
    var jumping = current_stats["Jumping"]
    var stamina = current_stats["Stamina"]
    var strength = current_stats["Strength"]
    var longshot = current_stats["LongShots"]
    var aggression = current_stats["Aggression"]
    var intercept = current_stats["Interceptions"]
    var position = parseInt(current_stats["Positioning"]) + parseInt(d3.select("#input_position").property('value'))
    var vision = current_stats["Vision"]
    var penalties = current_stats["Penalties"]
    var composure = parseInt(current_stats["Composure"]) + parseInt(d3.select("#input_composure").property('value'))

    var input_array=[age, height, weight, weak_foot, skills, attack, defend, pace, shooting, passing, dribbling, defendingT, physical, cross, heading, shortpass, volleys, curve, accuracy, longpass, control, agility, balance, shot, jumping, stamina, strength, longshot, aggression, intercept, position, vision, penalties, composure]
    console.log(input_array)
    var input_string=input_array.toString()
    console.log(input_string)

    // current_stats has 40 elements that are not sorted in the order of the X_train features
    // /prediciton endpoint takes ?param=value&param=value&param=value
    // var query_string=`?Age=${age}&Height=${height}&Weight=${weight}&WeakFoot=${weak_foot}&SkillMoves=${skills}&AttackingWorkRate=${attack}&DefensiveWorkRate=${defend}&PaceTotal=${pace}&ShootingTotal=${shooting}&PassingTotal=${passing}&DribblingTotal=${dribbling}&DefendingTotal=${defendingT}&PhysicalityTotal${physical}&Crossing${cross}&HeadingAccuracy=${heading}&ShortPassing=${shortpass}&Volleys=${volleys}&Curve=${curve}&FKAccuracy=${accuracy}&LongPassing=${longpass}&BallControl=${control}&Agility=${agility}&Balance=${balance}&ShotPower=${shot}&Jumping=${jumping}&Stamina=${stamina}&Strength=${strength}&LongShots=${longshot}&Aggression=${aggression}&Interceptions=${intercept}&Positioning=${position}&Vision=${vision}&Penalties=${penalties}&Composure=${composure}`
    // console.log(query_string)
    d3.json(`/predict/${input_string}`).then(result=>{
        d3.select('#new_overall_rating').text(result['output'])
        d3.select('#new_overall_value').text(result['output1'])
        d3.select('#new_overall_wage').text(result['output2'])
        d3.select('#new_overall_release').text(result['output3'])
    })
}