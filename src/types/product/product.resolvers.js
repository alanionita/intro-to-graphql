import { Product } from './product.model'
import { User, roles } from '../user/user.model'
import { AuthenticationError } from 'apollo-server'
import mongoose from 'mongoose'

const productsTypeMatcher = {
  GAMING_PC: 'GamingPc',
  BIKE: 'Bike',
  DRONE: 'Drone'
}

const products = () => Product.find({}).exec()
const product = (_, args) => Product.findById(args.id).exec()

export default {
  Query: { products, product },
  Mutation: {},
  Product: {
    __resolveType(product) {}
  }
}
