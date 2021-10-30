# FIFA Player Value |  Value Predictions ML Application
## Julie Baker, Lydia Deterding, Aarvin Rathod, Breckin Shoemaker, & Emily Zinn

![image](https://user-images.githubusercontent.com/83254124/139167113-ee22e84a-633f-493a-b199-bf1aa89d912e.png)


---
## Background

Soccer is the most popular sport with a following of about 4 billion worldwide. For that reason, we decided to create a supervised machine learning model that will analyze 34 player attributes to predict a player's Overall Rating, Value (Euros), Wage (Euros), and Release Clause (Euros). 

---
## Potential Use Case

We incorporated our model into a webpage with interactive features that will allow a player to adjust specific attributes to see how improving those areas will impact their overall rating score, value, wage, and release clause predicted amounts. We then provided them with additional resources based on the areas they are interested in improving. 

The data source for model developement can be found [here](https://www.kaggle.com/cashncarry/fifa-22-complete-player-dataset).

---
## Technology used:

>* Python
>* SciKit Learn
>* Pandas
>* Matplotlib
>* Seaborn
>* Flask API
>* MongoDB
>* JavaScript
>* HTML
>* CSS
>* d3.js


---
## Exploratory Data Analysis Overview

**Attributes used in Model**

>* Age - Player age in years
>* Height - Player height in cm 
>* Weight - Player weight in kg 
>* WeakFoot - Player's rating of usage for non-dominant foot (scale of 1-5)
>* SkillMoves - Player's skilled moves rating (scale 1-5)
>* AttackingWorkRate - "Other, Medium, High" (converted to scale of 1-3)
>* DefensiveWorkRate - "Other, Medium, High" (onverted to scale of 1-3)
>* PaceTotal - scale of 1-100
>* ShootingTotal - scale of 1-100
>* PassingTotal - scale of 1-100
>* DribblingTotal - scale of 1-100
>* DefendingTotal - scale of 1-100
>* PhysicalityTotal - scale of 1-100
>* Crossing - scale of 1-100
>* HeadingAccuracy - scale of 1-100
>* ShortPassing - scale of 1-100
>* Volleys - scale of 1-100
>* Curve - scale of 1-100
>* FKAccuracy - Free Kick Accuracy scale of 1-100
>* LongPassing - scale of 1-100
>* BallControl - scale of 1-100
>* Agility - scale of 1-100
>* Balance - scale of 1-100
>* ShotPower - scale of 1-100
>* Jumping - scale of 1-100
>* Stamina - scale of 1-100
>* Strength - scale of 1-100
>* LongShots - scale of 1-100
>* Aggression - scale of 1-100
>* Interceptions - scale of 1-100
>* Positioning - scale of 1-100
>* Vision - scale of 1-100
>* Penalties - scale of 1-100
>* Composure - scale of 1-100


---
**Attribute Correlation Map**

![image](https://user-images.githubusercontent.com/83254124/139167517-47e5c992-5194-45d2-aaf3-ec12444f01f7.jpeg)





---
## Model Selection

* Standard scaler applied to data

* Random Forest Classifier and Random Forest Regressor models were tested

* Random Forest Model Regressor selected based upon higher test scores

* Additional model research could be performed with other models and parameter adjustments


# Application Screenshot
![image](https://user-images.githubusercontent.com/83254124/139167297-c44db091-140c-48a1-960f-6b962f708833.png)
