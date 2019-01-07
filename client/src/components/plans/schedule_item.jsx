import React from 'react';
import Card from '@material-ui/core/Card'
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import StarRatings from 'react-star-ratings';

class ScheduleItem extends React.Component {
  render() {
    const { attraction } = this.props;

    const styles = {
      listItem: {
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '32px 100px',
      },
      iconContainer: { 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center' 
      },
      avatar: {
        background: 'white',
        padding: '10px 0',
        alignSelf: 'center'
      },
      timingContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: '20px',
      },
      dayofWeek: {
        fontSize: '18px',
        fontWeight: '400',
        textAlign: 'center',
        marginBottom: '5px',
      },
      timeOfDay: {
        textAlign: 'center',
        fontWeight: '300',
      },
      infoContainer: {
        height: '220px',
        minWidth: '500px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '0 60px 20px 60px',
      },
      attractionName: {
        fontSize: '20px',
        fontWeight: '700'
      },
      description: {
        fontWeight: '300',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        padding: '10px 0'    
      },
      imageContainer: {
        height: '220px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      },
      galleryPhoto: {
        height: '220px',
        width: '300px',
      },
      ratingContainer: {
        display: 'inline-flex'
      },
      rating: {
        fontSize: '25px',
        fontWeight: '500',
        lineHeight: '35px',
        marginLeft: '15px'
      },
      divider: {
        height: '30px',
        width: '1px',
        backgroundColor: 'gainsboro',
        borderRadius: '2px',
        margin: '0 auto',
        marginTop: '10px',
        marginBottom: '10px'
      }
    };

    const dow = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    return (
      <>
        <Card raised>
          <ListItem style={styles.listItem}>

              <div style={styles.iconContainer}>
                <div style={styles.timingContainer}>
                  <Typography style={styles.dayofWeek}>
                    {dow[Math.floor(Math.random() * dow.length)]}
                  </Typography>

                  <Typography style={styles.timeOfDay}>
                    10a-12p
                  </Typography>
                </div>
                
                <ListItemAvatar style={styles.avatar}>
                  <Avatar src={attraction.icon}/>
                </ListItemAvatar>
              </div>

              <div style={styles.infoContainer}>
                <Typography style={styles.attractionName}>
                  {attraction.name}
                </Typography>

                <Typography 
                  gutterBottom 
                  paragraph 
                  variant="body1"
                  style={styles.description}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat feugiat dui vel vestibulum. Phasellus eu felis sit amet mauris dictum lacinia vitae consectetur nunc. Maecenas sagittis tortor sit amet ligula blandit, et maximus arcu ultricies. Cras quis tortor eget ipsum consequat scelerisque at id orci. Aliquam sed molestie orci, vulputate cursus sapien. Nunc rhoncus ac libero ac facilisis. Nam bibendum odio a magna suscipit elementum. Mauris volutpat, risus id consectetur molestie, nunc nunc molestie ex, vitae semper risus felis vitae sem.
                  Fusce vel gravida leo. Ut venenatis, magna eu malesuada vestibulum, nibh tellus tempus dui, vel consequat dui metus ac nunc. Ut vulputate consequat venenatis. Quisque quis elit purus. Praesent non lobortis metus. Suspendisse tortor ligula, vehicula at diam id, fermentum porttitor eros. Vivamus id vulputate nisl. Curabitur tristique libero eu massa volutpat posuere.
                  Mauris a erat et mi tempus elementum. Sed ut eros ornare, consequat lacus a, condimentum massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus et ullamcorper purus. Proin purus lectus, efficitur quis massa eu, mollis aliquet mi. Aliquam sed nisi purus. Proin non commodo tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque leo nisi, laoreet id quam a, tempor blandit odio.
                  Ut maximus ex enim, a viverra diam faucibus pretium. Nunc quis euismod arcu, lacinia auctor odio. Donec vestibulum nulla a nisi varius semper. Duis mattis, elit et aliquet placerat, tortor sapien luctus massa, non posuere dolor est ac risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc mollis, neque ac pretium condimentum, leo turpis placerat nunc, malesuada pulvinar mi eros non ex. Vestibulum vel nulla id purus cursus hendrerit nec sed lacus. Vivamus ut lectus nec nisl ultrices viverra. Nunc fringilla volutpat molestie. Vestibulum tempor cursus nunc, non sagittis neque pellentesque vitae. In pulvinar, neque sed feugiat varius, leo dolor mattis tortor, vel gravida dui risus faucibus dolor. Sed eu mi eleifend ante semper facilisis. Nulla mauris lectus, egestas nec lobortis in, mattis id felis. Donec vitae nibh justo. Donec tincidunt viverra facilisis.
                  Aenean sit amet mi vel velit pellentesque pharetra aliquet iaculis diam. Nulla porta, nisl at bibendum vulputate, lectus nunc posuere massa, sed malesuada tortor purus et lectus. Proin feugiat dictum mi, vitae semper eros efficitur non. Fusce eleifend, quam aliquam venenatis pellentesque, sem magna volutpat quam, at sagittis arcu est tempus purus. Proin ligula mauris, maximus ut scelerisque eu, dapibus eget leo. Proin condimentum, ligula tristique fermentum semper, nunc lorem aliquam turpis, id feugiat risus massa eget ligula. Aliquam pulvinar ipsum dui, vitae varius libero pharetra et. Morbi metus lectus, elementum quis viverra vel, aliquam sit amet odio. Etiam vitae diam eu leo feugiat sagittis. Donec mollis, felis eget sodales ornare, diam neque pharetra lacus, ut pharetra eros quam nec sapien. Cras ullamcorper est eget commodo laoreet. Ut vehicula venenatis lorem eget dictum. Donec et nibh sit amet ligula hendrerit maximus.
                </Typography>

                <div style={styles.ratingContainer}>
                  <StarRatings
                    rating={attraction.rating}
                    starRatedColor="black"
                    numberOfStars={5}
                    starDimension="30px"
                    starSpacing="5px"
                  />

                  <Typography style={styles.rating}>
                    {attraction.rating}
                  </Typography>
                </div>
              </div>

              <div style={styles.imageContainer}>
                <img style={styles.galleryPhoto} src="https://media-cdn.tripadvisor.com/media/photo-s/12/f5/f1/8d/eiffel-tower-summit-priority.jpg" alt=""/>
              </div>
            {/* </div> */}
          </ListItem>
        </Card>

        <div style={styles.divider}></div>
      </>
    );
  }
}

export default ScheduleItem;