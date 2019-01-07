import express from 'express';
import passport from 'passport';
import request from 'request';
import rp from 'request-promise';

import User from '../models/User';
import ItineraryPackage from '../../dist/models/ItineraryPackage';

const itineraries = express.Router();

itineraries.get(
   '/:id',
   passport.authenticate('jwt', { session: false }),
   (req, res) => {
      const id = req.params;
      ItineraryPackage.findById(id)
         .populate({
            path: 'itinerary_packages',
            populate: {
               path: 'attractions',
               populate: {
                  path: 'city'
               }
            }
         })
         .then((itinerary) => {
            res.send(itinerary);
         });
   }
);

itineraries.get(
   '/',
   passport.authenticate('jwt', { session: false }),
   (req, res) => {
      User.findById(req.user._id)
         .populate({
            path: 'itinerary_packages',
            populate: {
               path: 'attractions',
               populate: {
                  path: 'city'
               }
            }
         })
         .then((user) => res.send(user))
         .catch((err) => res.status(500).send(err));
   }
);

itineraries.post(
   '/',
   passport.authenticate('jwt', { session: false }),
   (req, res) => {
      const { _id } = req.user;
      let id = req.body._id;
      ItineraryPackage.findById(id)
         .then((itinerary) => {
            User.findById(_id)
               .populate({
                  path: 'itinerary_packages',
                  populate: {
                     path: 'attractions',
                     populate: {
                        path: 'city'
                     }
                  }
               })
               .then((user) => {
                  user.itinerary_packages.push(itinerary);
                  user.save().then((user) => {
                     res.send(user);
                  });
               });
         })
         .catch((err) => {
            res.status(500).json('Could not save itinerary to user');
         });
   }
);

itineraries.delete(
   '/',
   passport.authenticate('jwt', { session: false }),
   (req, res) => {
      const { _id } = req.user;
      const { itinerary } = req.body;
      User.findById(_id)
         .populate({
            path: 'itinerary_packages',
            populate: {
               path: 'attractions',
               populate: {
                  path: 'city'
               }
            }
         })
         .then((user) => {
            user.itinerary_packages.pull(itinerary);
            user.save().then((user) => {
               res.send(user);
            });
         });
   }
);

export default itineraries;
